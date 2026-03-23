import { Controller, Get } from '@nestjs/common';
import { PositionService } from './position.service';
import { Position } from 'src/types';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get()
  getPositions(): Position[] {
    return this.positionService.getPositions();
  }
}
