import { Module, forwardRef } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Song]),
  ],
  controllers: [SongsController],
  providers: [SongsService],
  exports:[SongsService]
})
export class SongsModule {}
