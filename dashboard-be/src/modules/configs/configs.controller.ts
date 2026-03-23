import { Controller, Get, Param } from '@nestjs/common';
import { ConfigsService } from './configs.service';

@Controller('configs')
export class ConfigsController {
  constructor(private readonly configsService: ConfigsService) {}

  @Get('headings')
  getHeadings(): string[] {
    return this.configsService.getHeadings();
  }

  @Get('companies')
  getCompanies(): { id: number; company: string; sector: string }[] {
    return this.configsService.getCompanies();
  }

  @Get('companies/:id')
  getCompanySector(@Param('id') companyName: string): string {
    return this.configsService.getCompanySector(companyName);
  }
}
