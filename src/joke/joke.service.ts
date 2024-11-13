import { Injectable } from '@nestjs/common';
import { CreateJokeDto } from './dtos/create-joke.dto'; 

@Injectable()
export class JokeService {
    constructor(
        private jokes: { content: string; type: string }[] = []
    ) {}

    submitJoke(joke: CreateJokeDto) {
        this.jokes.push(joke);
        return { message: 'Joke submitted successfully', joke }
    }

    getAllJokes() {
        return this.jokes;
    }
}
