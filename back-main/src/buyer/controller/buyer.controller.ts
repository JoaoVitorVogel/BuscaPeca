import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BuyerService } from '../service/buyer.service';
import { Buyer } from '@prisma/client';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/auth.decorator';
import { BuyerDTO } from '../dtos/buyer.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('buyer')
@ApiTags('Buyer')
export class BuyerController {
  constructor(private buyerService: BuyerService) {}

  @ApiOperation({ summary: 'Create a new buyer' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              example: 'name',
            },
            email: {
              type: 'string',
              example: 'newuser@email.com',
            },
            password: {
              type: 'string',
              example: '123',
            },
            document_number: {
              type: 'string',
              example: '333',
            },
            role: {
              type: 'object',
              properties: {
                enumerator: {
                  type: 'string',
                  example: 'buyer',
                },
              },
            },
          },
          required: ['username', 'email'],
        },
        company_name: {
          type: 'string',
          example: '',
        },
        trading_name: {
          type: 'string',
          example: 'ferro',
        },
        document_number: {
          type: 'string',
          example: '999',
        },
        email: {
          type: 'string',
          example: 'aaa@gmail.com',
        },
        phone_country_code: {
          type: 'string',
          example: '55',
        },
        phone_area_code: {
          type: 'string',
          example: '51',
        },
        phone_number: {
          type: 'string',
          example: '999999999',
        },
        street: {
          type: 'string',
          example: 'Rua 7',
        },
        neighborhood: {
          type: 'string',
          example: 'AAAAA',
        },
        number: {
          type: 'string',
          example: '444',
        },
        city: {
          type: 'string',
          example: 'Porto Alegre',
        },
        state: {
          type: 'string',
          example: 'RS',
        },
        complement: {
          type: 'string',
          example: '4',
        },
        postal_code: {
          type: 'string',
          example: '99999999',
        },
      },
      required: ['user', 'state'],
    },
  })
  @Post()
  @Public()
  async createBuyer(@Body() data: BuyerDTO): Promise<Buyer> {
    return this.buyerService.create(data);
  }

  @ApiOperation({ summary: 'Get all buyer purchases' })
  @Get(':buyer_id/purchases')
  @Auth('buyer', 'admin')
  async getBuyerPurchases(@Param('buyer_id') buyer_id: string): Promise<any> {
    return this.buyerService.getBuyerPurchases(buyer_id);
  }
}
