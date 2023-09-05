import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Song } from './entities/song.entity';
import { SongDto } from './dto/song.dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository:Repository<Song>
  ){}

   async insertSongs(songs: SongDto[]) {
    try {
      const newSong = await this.songRepository.save(songs);
      return newSong;
    } catch (error) {
      throw new Error(`Error inserting song into the database: ${error.message}`);
    }
  }
  
  async getAllSongs() {
    return this.songRepository.find({ order: { band: 'ASC' } });
  }
}
