import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersGateway } from './orders.gateway';
import { PositionModule } from '../position/position.module';

@Module({
  imports: [PositionModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersGateway]
})
export class OrdersModule {}
