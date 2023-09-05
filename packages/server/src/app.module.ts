import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { CsvModule } from './csv/csv.module';
import { CsvService } from './csv/csv.service';
import { Song } from './songs/entities/song.entity';
import { SongsService } from './songs/songs.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'songlist',
      password: 'songlist',
      database: 'songlist',
      entities: [Song],
      synchronize: true, //should be used with caution in production
      autoLoadEntities: true,
    }),
    CsvModule,
    SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
