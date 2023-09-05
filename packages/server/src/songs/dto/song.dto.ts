import { ApiProperty } from '@nestjs/swagger';

export class SongDto {
    @ApiProperty({
        description: 'The ID of the songs',
      })
      id: number;

      @ApiProperty({
        description: 'The name of the song',
        minLength: 1,
        maxLength: 30,
      })
      songName: string;

      @ApiProperty({
        description: 'The band name of the song',
        minLength: 1,
        maxLength: 30,
      })
      band: string;

      @ApiProperty({
        description: 'The year of the song',
        
      })
      year: string; // or number?
}


