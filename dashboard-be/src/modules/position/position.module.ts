import { Module } from '@nestjs/common';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';
import { PositionGateway } from './position.gateway';

@Module({
  controllers: [PositionController],
  providers: [PositionService, PositionGateway],
  exports: [PositionService],
})
export class PositionModule {}
