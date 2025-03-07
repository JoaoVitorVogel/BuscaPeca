import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PartService } from '../service/part.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Car, Model, Part, PartType } from '@prisma/client';
import { Auth } from 'src/auth/auth.decorator';
import { PartDTO } from 'src/car/dtos/part.dto';

@Controller()
@ApiTags('Part')
export class PartController {
  constructor(private partService: PartService) {}

  @ApiOperation({ summary: 'get all parts' })
  @Auth('buyer', 'admin')
  @Get('part/available')
  async getParts(
    @Query('brand_id') brand_id: number,
    @Query('model_id') model_id: number,
    @Query('part_type_id') part_type_id: number,
    @Query('year_from') year_from: string,
    @Query('year_to') year_to: string,
  ): Promise<(Part & { car: Car & { model: Model }; part_type: PartType })[]> {
    return await this.partService.findAllParts(
      brand_id && Number(brand_id),
      model_id && Number(model_id),
      part_type_id && Number(part_type_id),
      year_from,
      year_to,
    );
  }

  @ApiOperation({ summary: 'update part' })
  @Auth('seller', 'admin')
  @Put('part/:id')
  async updatePart(
    @Param('id') id: number,
    @Body() part: Part,
  ): Promise<Part> {
    return this.partService.updatePart(id, part);
  }

  @ApiOperation({ summary: 'create part' })
  @Auth('seller', 'admin')
  @Post('part')
  async createPart(
    @Body() part: PartDTO,
  ): Promise<Part> {
    return this.partService.createPart(part);
  }

  @ApiOperation({ summary: 'delete part by id' })
  @Auth('seller', 'admin')
  @Put('part/:id/delete')
  async deletePart(
    @Param('id') id: number,
  ): Promise<void> {
    return this.partService.deletePart(id);
  }
}
