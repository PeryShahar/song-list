var path = require('path')
const CSVToJSON = require('csvtojson');

import { Injectable } from '@nestjs/common';
import { Song } from 'src/songs/entities/song.entity';
import { SongsService } from 'src/songs/songs.service';

@Injectable()
export class CsvService {
  constructor(
    private readonly songsService: SongsService,
  ) { }

  async insertCsvFileToDb() {
    try {
      const fullPath = path.join(__dirname, '../../src/assets/song_list.csv')

      const songs = await CSVToJSON().fromFile(fullPath);
      const songsData = [];
      for (const songData of songs) {
        const song = new Song();
        const [songName, band, year] = songData['Song Name;Band;Year'].split(';');

        song.songName = songName.toLowerCase();
        song.band = band.toLowerCase();
        song.year = year.toLowerCase();
        songsData.push(song)
      }
       await this.songsService.insertSongs(songsData)
    } catch (error) {
      throw new Error(`Error inserting CSV data into the database: ${error.message}`);
    }
  }
}


