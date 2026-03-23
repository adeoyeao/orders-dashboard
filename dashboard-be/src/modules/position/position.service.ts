import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { type Position } from 'src/types';
import { getStartOfDayPosition } from 'src/utils';

@Injectable()
export class PositionService implements OnModuleInit {
  private readonly logger = new Logger(PositionService.name)
  positions: Position[] = []

  onModuleInit() {
    this.logger.log('Calculating start of day position')
    this.positions = getStartOfDayPosition()
    this.logger.log(`Calculated start of day positon for ${this.positions.length} companies`)
  }

  getPositions() {
    return this.positions
  }
}
