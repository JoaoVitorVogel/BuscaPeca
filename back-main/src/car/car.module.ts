import { Module } from '@nestjs/common';

import { CarService } from './service/car.service';
import { CarController } from './controller/car.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [CarService],
  controllers: [CarController],
  imports: [SharedModule],
  exports: [CarService],
})
export class CarModule {}
