import { Injectable } from '@nestjs/common';
import { COMPANIES } from 'src/constants/companies';
import { HEADINGS } from 'src/constants/headings';

@Injectable()
export class ConfigsService {
  getHeadings(): string[] {
    return HEADINGS
  }

  getCompanies(): {id: number, company: string, sector: string}[] {
    return COMPANIES
  }

  getCompanySector(company: string): string {
    console.log(company)
    return COMPANIES.find(data => data.company === company)?.sector || 'Unknown'
  }
 }
