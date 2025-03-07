import { Module } from '@nestjs/common';

import { BuyerService } from './service/buyer.service';
import { UserService } from 'src/user/service/user.service';
import { BuyerController } from './controller/buyer.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [BuyerService, UserService],
  controllers: [BuyerController],
  imports: [SharedModule],
  exports: [BuyerService],
})
export class BuyerModule {}
