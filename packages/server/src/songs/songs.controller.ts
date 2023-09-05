import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SongDto } from './dto/song.dto';

@ApiTags('songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.getAllSongs();
  }
}
