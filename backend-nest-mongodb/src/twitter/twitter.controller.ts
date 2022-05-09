import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { CreateTwitterDto, TwitterDto } from './dto/create-twitter.dto';

import { TwitterService } from './twitter.service';

@Controller('tweets')
export class TwitterController {
  constructor(private twitterService: TwitterService) {}

  @Post()
  async create(@Body() createTwitterDto: CreateTwitterDto) {
    this.twitterService.create(createTwitterDto);
  }

  @Get()
  async findAll(): Promise<TwitterDto[]> {
    return this.twitterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<TwitterDto> {
    return this.twitterService.findOne(id);
  }

  @Put(':id')
  update(
    @Body() updateTwitterDto: CreateTwitterDto,

    @Param('id') id,
  ): Promise<TwitterDto> {
    return this.twitterService.update(id, updateTwitterDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<TwitterDto> {
    return this.twitterService.delete(id);
  }
}
