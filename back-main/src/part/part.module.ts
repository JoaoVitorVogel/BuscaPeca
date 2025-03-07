import { Module } from '@nestjs/common';

import { PartService } from './service/part.service';
import { PartController } from './controller/part.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [PartService],
  controllers: [PartController],
  imports: [SharedModule],
  exports: [PartService],
})
export class PartModule {}
