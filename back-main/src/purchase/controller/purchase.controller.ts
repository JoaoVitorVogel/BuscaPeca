import {
  Body,
  Controller,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { PurchaseService } from '../service/purchase.service';
import { Part, Purchase } from '@prisma/client';
import { PurchaseDto } from '../dtos/purchase.dto';
import { Auth } from '../../auth/auth.decorator';
import { Request } from 'express';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}
  @Post()
  @HttpCode(200)
  @Auth('buyer', 'admin')
  async purchase(
    @Body() data: PurchaseDto,
    @Req() request: Request,
  ): Promise<Purchase> {
    return this.purchaseService.purchase(data, request.user.id);
  }

  @Put(':part_id/update_purchase')
  @Auth('seller', 'admin')
  @HttpCode(200)
  async update_status(@Param('part_id') part_id: string): Promise<Part> {
    return this.purchaseService.update(part_id);
  }
}
