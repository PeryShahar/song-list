import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Song } from './entities/song.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository:Repository<Song>
  ){}

  async insertSong(song: Song) {
    try {
      const newSong = await this.songRepository.save(song);
      return newSong;
    } catch (error) {
      throw new Error(`Error inserting song into the database: ${error.message}`);
    }
  }
  
  getAllSongs():Promise<Song[]> | any {
    return `This action returns all songs`;
    return this.songRepository.find({ order: { band: 'ASC' } });
  }
}
