import { Injectable } from '@nestjs/common';
import { COMPANIES } from 'src/constants/companies';
import { HEADINGS } from 'src/constants/headings';

@Injectable()
export class ConfigsService {
  getHeadings(): string[] {
    return HEADINGS
  }

  getCompanies(): {id: number, companyName: string, sector: string}[] {
    return COMPANIES
  }

  getCompanySector(company: string): string {
    console.log(company)
    return COMPANIES.find(data => data.companyName === company)?.sector || 'Unknown'
  }
 }
