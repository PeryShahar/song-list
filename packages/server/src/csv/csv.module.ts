import { Module } from '@nestjs/common';
import { CsvService } from './csv.service';
import { CsvController } from './csv.controller';
import { SongsModule } from 'src/songs/songs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from 'src/songs/entities/song.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Song]),
    SongsModule,
  ],
  controllers: [CsvController],
  providers: [CsvService],
  exports: [CsvService]
})
export class CsvModule {}
