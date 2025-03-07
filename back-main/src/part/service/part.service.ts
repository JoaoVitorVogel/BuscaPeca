import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { Car, Model, Part, PartType } from '@prisma/client';
import { parseYearStringToDate } from 'src/utils/date_handlers';
import { PartDTO } from 'src/car/dtos/part.dto';

@Injectable()
export class PartService {
  constructor(private prisma: PrismaService) {}

  async findAllParts(
    brand_id: number | undefined,
    model_id: number | undefined,
    part_type_id: number | undefined,
    year_from: string | undefined,
    year_to: string | undefined,
  ): Promise<(Part & { car: Car & { model: Model }; part_type: PartType })[]> {
    return await this.prisma.part.findMany({
      where: {
        part_status_id: 1,
        part_type_id: part_type_id ?? undefined,
        car: {
          model: {
            brand_id: brand_id ?? undefined,
            id: model_id ?? undefined,
          },
          release_year: {
            gte: year_from ? parseYearStringToDate(year_from) : undefined,
            lte: year_to ? parseYearStringToDate(year_to) : undefined,
          },
        },
      },
      include: {
        car: {
          include: {
            model: true,
          },
        },
        part_type: true,
      },
    });
  }

  async updatePart(part_id: number, data: Partial<Part>): Promise<Part> {
    part_id = Number(part_id);
    try {
      const updatedPart = await this.prisma.part.update({
        where: { id: part_id },
        data: {
          part_status_id: data.part_status_id,
          part_type_id: data.part_type_id,
          description: data.description,
          price: data.price,
        },
      });
      return updatedPart;
    } catch (error) {
      throw new HttpException(
        { error: error.message, message: 'Erro ao atualizar peça' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async createPart(data: PartDTO): Promise<Part> {
    try {
      const newPart = await this.prisma.part.create({
        data: {
          car_id: data.car_id,
          part_status_id: 1,
          part_type_id: data.part_type_id,
          description: data.description,
          price: data.price,
        },
      });
      return newPart;
    } catch (error) {
      throw new HttpException(
        { error: error.message, message: 'Erro ao criar peça' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deletePart(part_id: number): Promise<void> {
    part_id = Number(part_id);
    try {
      const purchasePart = await this.prisma.purchasePart.findMany({
        where: { part_id: part_id },
      });
      
      if (purchasePart.length > 0) {
        throw new HttpException(
          { message: 'Pedidos em aberto' },
          HttpStatus.BAD_REQUEST,
        );
      }

      await this.prisma.part.delete({
        where: { id: part_id },
      });
      
    } catch (error) {
      throw new HttpException(
      { error: error.message, message: 'Erro ao deletar peça' },
      HttpStatus.BAD_REQUEST,
      );
    }
  }
}
