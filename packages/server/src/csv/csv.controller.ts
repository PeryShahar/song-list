import { Controller } from '@nestjs/common';
import { CsvService } from './csv.service';

@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}
}
