import { Module } from '@nestjs/common';

import { PurchaseService } from './service/purchase.service';
import { PurchaseController } from './controller/purchase.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [PurchaseService],
  controllers: [PurchaseController],
  imports: [SharedModule],
  exports: [PurchaseService],
})
export class PurchaseModule {}
