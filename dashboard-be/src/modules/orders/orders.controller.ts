import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/types';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders(): Order[] {
    return this.ordersService.getOrders();
  }
}
