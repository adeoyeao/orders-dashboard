import { Injectable } from '@nestjs/common';
import { OrdersGateway } from './orders.gateway';
import { Cron, CronExpression } from '@nestjs/schedule';
import { generateNewOrder } from 'src/utils';
import { Order } from 'src/types';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersGateway: OrdersGateway) {}
  orders: Order[] = [];

  getOrders() {
    return this.orders;
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    const newOrder = generateNewOrder();
    this.ordersGateway.server.emit('order', {
      message: newOrder,
      timestamp: Date.now(),
    });
    this.orders.push(newOrder);
  }
}
