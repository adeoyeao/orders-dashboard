import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './modules/configs/configs.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PositionModule } from './modules/position/position.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ConfigsModule, OrdersModule, PositionModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
