import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SellerModule } from './seller/seller.module';
import { BuyerModule } from './buyer/buyer.module';
import { CarModule } from './car/car.module';
import { AuthGuard } from './auth/auth.guard';
import { PurchaseModule } from './purchase/purchase.module';
import { PartModule } from './part/part.module';

@Module({
  imports: [
    UserModule,
    SharedModule,
    AuthModule,
    UserModule,
    SellerModule,
    BuyerModule,
    CarModule,
    PurchaseModule,
    PartModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
