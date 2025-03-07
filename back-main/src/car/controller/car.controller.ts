import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CarDTO } from '../dtos/car.dto';
import { CarService } from '../service/car.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Brand, Model, PartType } from '@prisma/client';
import { Auth } from 'src/auth/auth.decorator';

@Controller()
@ApiTags('Car')
export class CarController {
  constructor(
    private carService: CarService,
  ) {}

  @ApiOperation({ summary: 'Post a new car with your parts' })
  @Auth('seller', 'admin')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        model: {
          type: 'object',
          properties: {
            enumerator: {
              type: 'string',
              example: 'Mustang',
            },
            brand: {
              type: 'string',
              example: 'Ford',
            },
          },
        },
        release_year: {
          type: 'string',
          example: '2021',
        },
        cost: {
          type: 'number',
          example: '12000',
        },
        purchase_date: {
          type: 'string',
          example: '17/08/2024',
        },
        parts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              part_status: {
                type: 'string',
                enum: ['Available', 'Unavailable'],
                example: 'Available',
              },
              part_type: {
                type: 'number',
                enum: ['1', '2', '3'],
                example: '1',
              },
              description: {
                type: 'string',
                example: 'Em bom estado',
              },
              price: {
                type: 'number',
                example: '310',
              },
            },
          },
        },
      },
    },
  })
  @Post('seller/:seller_id/cars')
  async create(
    @Param('seller_id') seller_id: number,
    @Body() data: CarDTO,
  ): Promise<{ car_id: number }> {
    return this.carService.create(Number(seller_id), data);
  }

  @ApiOperation({ summary: 'Get all brands' })
  @Auth('seller', 'buyer', 'admin')
  @Get('brand')
  async findAllBrands(): Promise<Brand[]> {
    return this.carService.findAllBrands();
  }

  @ApiOperation({ summary: 'get all models' })
  @Auth('seller', 'buyer', 'admin')
  @Get('brand/:brand_id/model')
  async getModels(@Param('brand_id') brand_id: number): Promise<Model[]> {
    return this.carService.findAllModels(Number(brand_id));
  }

  @ApiOperation({ summary: 'Get all parts' })
  @Auth('seller', 'buyer', 'admin')
  @Get('part')
  async findAllPartTypes(): Promise<PartType[]> {
    return this.carService.findAllPartTypes();
  }

  @ApiOperation({ summary: 'Update an existing car' })
  @Auth('seller', 'admin')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        model: {
          type: 'object',
          properties: {
            enumerator: {
              type: 'string',
              example: 'Mustang',
            },
            brand: {
              type: 'string',
              example: 'Ford',
            },
          },
        },
        release_year: {
          type: 'string',
          example: '2021',
        },
        cost: {
          type: 'number',
          example: '12000',
        },
        purchase_date: {
          type: 'string',
          example: '17/08/2024',
        },
      },
    },
  })
  @Put('seller/:seller_id/cars/:car_id')
  async update(
    @Param('seller_id') seller_id: number,
    @Param('car_id') car_id: number,
    @Body() data: CarDTO,
  ): Promise<{ car_id: number }> {
    const updatedCar = await this.carService.update(Number(seller_id), Number(car_id), data);

    return updatedCar;
  }
}