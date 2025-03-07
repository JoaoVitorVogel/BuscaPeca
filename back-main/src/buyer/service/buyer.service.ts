import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserService } from 'src/user/service/user.service';
import { Buyer } from '@prisma/client';
import { BuyerDTO } from '../dtos/buyer.dto';

@Injectable()
export class BuyerService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create(data: BuyerDTO): Promise<Buyer> {
    const user = await this.userService.create({
      username: data.user.username,
      email: data.email,
      password: data.user.password,
      document_number: data.document_number,
      role_id: 3,
    });
    const buyer = await this.prisma.buyer.create({
      data: {
        user_id: user.id,
        company_name: data.company_name,
        trading_name: data.trading_name,
        document_number: data.document_number,
        email: data.email,
        phone_country_code: data.phone_country_code,
        phone_area_code: data.phone_area_code,
        phone_number: data.phone_number,
        street: data.street,
        neighborhood: data.neighborhood,
        number: data.number,
        city: data.city,
        state: data.state,
        complement: data.complement,
        postal_code: data.postal_code,
      },
    });

    return buyer;
  }

  async getBuyerPurchases(buyer_id: string) {
    const purchases  = await this.prisma.purchase.findMany({
      where: {
        buyer_id: parseInt(buyer_id.toString()),
      },
      include: {
        purchase_parts: {
          include: {
            part: {
              include: {
                part_status: true,
                car: {
                  include: {
                    model: true,
                  },
                },
                part_type: true,
              },
            },
          },
        },
      },
    });
    
    const purchaseWithCanceled = await Promise.all(purchases.map(async purchase => {
      const canceled = await this.prisma.canceled_purchase_part.findMany({
        where:{
          purchase_id: purchase.id,
        },
        include: {
          part: {
            include: {
              part_status: true,
              car: {
                include: {
                  model: true,
                },
              },
              part_type: true,
            },
          },
        },
      })
      
      return {
        ...purchase,
        canceled: canceled,
      }
    }))
    
    return purchaseWithCanceled
  }
}
