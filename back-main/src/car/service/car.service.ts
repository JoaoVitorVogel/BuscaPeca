import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CarDTO } from 'src/car/dtos/car.dto';
import { PartDTO } from '../dtos/part.dto';
import { HttpException, HttpStatus } from '@nestjs/common'; // Importações NestJS, se estiver usando
import { Brand, Model, PartType } from '@prisma/client';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async create(seller_id: number, data: CarDTO): Promise<{ car_id: number }> {
    if (!seller_id) {
      throw new HttpException(
        { error: 'ID do seller não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!data.model.model_id) {
      throw new HttpException(
        { error: 'ID do modelo não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!data.release_year) {
      throw new HttpException(
        { error: 'Data de fabricação não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!data.cost) {
      throw new HttpException(
        { error: 'Custo não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!data.purchase_date) {
      throw new HttpException(
        { error: 'Data da compra não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const car = await this.prisma.car.create({
        data: {
          seller_id: seller_id,
          model_id: data.model.model_id,
          release_year: new Date(`${data.release_year}-01-01`),
          cost: data.cost,
          purchase_date: new Date(data.purchase_date),
        },
      });

      const partsData: PartDTO[] = data.parts.map((pData: PartDTO) => ({
        car_id: car.id,
        part_status_id: 1,
        part_type_id: pData.part_type_id,
        description: pData.description,
        price: pData.price,
      }));

      await this.prisma.part.createMany({
        data: partsData,
      });

      return { car_id: car.id };
    } catch (error) {
      throw new HttpException(
        { error: error, message: 'Erro ao criar carro' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAllBrands(): Promise<Brand[]> {
    return await this.prisma.brand.findMany();
  }

  async findAllPartTypes(): Promise<PartType[]> {
    return await this.prisma.partType.findMany();
  }

  async findAllModels(brand_id: number): Promise<Model[]> {
    return this.prisma.model.findMany({
      where: {
        brand_id: brand_id,
      },
    });
  }
  async update(seller_id: number, car_id: number, data: CarDTO): Promise<{ car_id: number }> {
    if (!seller_id) {
      throw new HttpException(
        { error: 'ID do seller não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!car_id) {
      throw new HttpException(
        { error: 'ID do carro não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!data.model.model_id) {
      throw new HttpException(
        { error: 'ID do modelo não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!data.release_year) {
      throw new HttpException(
        { error: 'Data de fabricação não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!data.cost) {
      throw new HttpException(
        { error: 'Custo não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!data.purchase_date) {
      throw new HttpException(
        { error: 'Data da compra não pode ser nulo' },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const car = await this.prisma.car.update({
        where: { id: car_id },
        data: {
          seller_id: seller_id,
          model_id: data.model.model_id,
          release_year: new Date('${data.release_year}-01-01'),
          cost: data.cost,
          purchase_date: new Date(data.purchase_date),
        },
      });
      return { car_id: car.id };
    } catch (error) {
      throw new HttpException(
        { error: error, message: 'Erro ao atualizar carro' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
