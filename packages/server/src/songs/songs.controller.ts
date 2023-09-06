import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';
import {  ApiTags } from '@nestjs/swagger';

@ApiTags('songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.getAllSongs();
  }
}
