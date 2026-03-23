import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Order, type Position } from 'src/types';
import { getStartOfDayPosition } from 'src/utils';
import { PositionGateway } from './position.gateway';

@Injectable()
export class PositionService implements OnModuleInit {
  constructor(private readonly positionGateway: PositionGateway) {}
  private readonly logger = new Logger(PositionService.name);
  positions: Position[] = [];

  onModuleInit() {
    this.logger.log('Calculating start of day position');
    this.positions = getStartOfDayPosition();
    this.logger.log(
      `Calculated start of day positon for ${this.positions.length} companies`,
    );
  }

  getPositions() {
    return this.positions;
  }

  updatePositions(newOrder: Order) {
    const positionIndex = this.positions.findIndex(
      (position) => position.company === newOrder.company,
    );

    const currentQty =
      positionIndex === -1 ? 0 : this.positions[positionIndex].orderQty;
    const nextQty = currentQty + newOrder.orderQty;
    const nextPosition: Position = {
      company: newOrder.company,
      sector: newOrder.sector,
      orderQty: nextQty,
      side: nextQty >= 0 ? 'Buy' : 'Sell',
    };

    if (positionIndex === -1) {
      this.positions.push(nextPosition);
    } else {
      this.positions[positionIndex] = nextPosition;
    }

    this.positionGateway.server.emit('position', {
      message: nextPosition,
      type: positionIndex === -1 ? 'add' : 'edit',
      timestamp: Date.now(),
    })
  }
}
