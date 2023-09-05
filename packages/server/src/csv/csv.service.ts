import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';

import { Song } from 'src/songs/entities/song.entity';
import { SongsService } from 'src/songs/songs.service';
var path = require('path')

@Injectable()
export class CsvService {
    constructor(
        @InjectRepository(Song)
        private readonly songsService: SongsService,
      ){}

    async insertCsvFileToDb() {
        try {
            const fullPath = path.join(__dirname, '../../src/assets/song_list.csv')

            const stream = fs.createReadStream(fullPath);
      
            stream.pipe(csvParser()) // Pipe the CSV stream through csv-parser
              .on('data', async (row) => {
                const songName = row['Song Name'].trim().toLowerCase();
                const band = row['Band'].trim().toLowerCase();
                const year = row['Year'].trim().toLowerCase();
      
                // Create a new Song entity
                const song = new Song();
                song.songName = songName;
                song.band = band;
                song.year = year;
      
                // Insert the song data into the database using the SongsService
                await this.songsService.insertSong(song);
              })
              .on('end', () => {
                console.log('CSV file processing finished.');
              });
          } catch (error) {
            throw new Error(`Error inserting CSV data into the database: ${error.message}`);
          }
    }
}


