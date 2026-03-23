import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './modules/configs/configs.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PositionModule } from './modules/position/position.module';

@Module({
  imports: [ConfigsModule, OrdersModule, PositionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
