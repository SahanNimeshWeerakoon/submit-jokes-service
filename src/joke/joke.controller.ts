import { Controller, Body, Post, Get } from '@nestjs/common';
import { JokeService } from './joke.service';
import { CreateJokeDto } from './dtos/create-joke.dto';

@Controller('jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Post('submit')
  submitJoke(@Body() createJokeDto: CreateJokeDto) {
    return this.jokeService.submitJoke(createJokeDto);
  }

  @Get()
  getAllJokes() {
    return this.getAllJokes();
  }

}
