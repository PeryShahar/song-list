
import { PickType } from '@nestjs/swagger';
import { SongDto } from './song.dto';

export class CreateSongDto extends PickType(SongDto, [
    'songName',
    'band',
    'year'
  ] as const) {}
