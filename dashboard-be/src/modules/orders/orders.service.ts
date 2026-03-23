import { Injectable } from '@nestjs/common';
import { OrdersGateway } from './orders.gateway';
import { Cron, CronExpression } from '@nestjs/schedule';
import { generateNewOrder } from 'src/utils';
import { Order } from 'src/types';
import { PositionService } from '../position/position.service';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersGateway: OrdersGateway, private readonly positionService: PositionService) {}
  orders: Order[] = [];

  getOrders() {
    return this.orders;
  }

  @Cron(CronExpression.EVERY_SECOND)
  handleCron() {
    const newOrder = generateNewOrder();
    this.ordersGateway.server.emit('order', {
      message: newOrder,
      timestamp: Date.now(),
    });
    this.orders.push(newOrder);
    this.positionService.updatePositions(newOrder)
  }
}
