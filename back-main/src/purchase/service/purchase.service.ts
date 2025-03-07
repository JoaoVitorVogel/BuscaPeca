import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { Part, Purchase } from '@prisma/client';
import { PurchaseDto } from '../dtos/purchase.dto';

@Injectable()
export class PurchaseService {
  PurchaseService: any;
  constructor(private prisma: PrismaService) {}

  async purchase(data: PurchaseDto, buyer_id: string): Promise<Purchase> {
    const { partIds } = data;
    const partList = partIds.map((part) => part.id);
    const buyerExists = await this.prisma.buyer.findUnique({
      where: { user_id: parseInt(buyer_id) },
    });

    if (!buyerExists) {
      throw new NotFoundException('The specified buyer does not exist.');
    }
    const existingParts = await this.prisma.part.findMany({
      where: { id: { in: partList } },
      select: {
        id: true,
        car: {
          select: {
            seller_id: true,
          },
        },
      },
    });

    if (existingParts.length !== partIds.length) {
      throw new NotFoundException(
        'Some of the provided parts do not exist in the database.',
      );
    }

    const purchase = await this.prisma.purchase.create({
      data: {
        buyer: {
          connect: {
            user_id: parseInt(buyer_id),
          },
        },
        description: 'Total do pedido',
        purchase_parts: {
          create: existingParts.map((part) => ({
            seller: {
              connect: { user_id: part.car.seller_id },
            },
            part: {
              connect: { id: part.id },
            },
          })),
        },
      },
      include: {
        purchase_parts: true,
      },
    });
    
    existingParts.forEach(async (part) => {
      await this.prisma.part.update({
        where: { id: part.id },
        data: {
          part_status_id: 2,
        },
      });
    }
    );
    
    return purchase;
  }

  async update(part_id: string): Promise<Part> {
    
    const purchasePartExists = await this.prisma.purchasePart.findFirst({
      where: {
        part_id: parseInt(part_id),
      },
    });
    
    if (!purchasePartExists) {
      throw new NotFoundException('The specified part does not exist.');
    }
    
    const updatedParts = await this.prisma.part.update({
      where: {
        id: parseInt(part_id),
      },
      data: {
        part_status_id: 3,
        updated_at: new Date(),
      },
    });

    return updatedParts;
  }
}
