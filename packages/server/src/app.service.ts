import { Injectable, OnModuleInit } from '@nestjs/common';
import { CsvService } from './csv/csv.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly csvService: CsvService
    ) {}
    
    async onModuleInit() {
    // await this.csvService.insertCsvFileToDb()
    }

  getHello(): string {
    return 'Hello World!';
  }
}
