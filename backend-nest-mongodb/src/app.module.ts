import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { TwitterController } from './twitter/twitter.controller';

import { TwitterService } from './twitter/twitter.service';

import { TwitterModule } from './twitter/twitter.module';

@Module({
  imports: [
    TwitterModule,

    // Local MongoDb database

    // Change the port to 127.0.0.1:2717 to connect to Docker

    MongooseModule.forRoot('mongodb://127.0.0.1:2717/twitter'),
  ],

  controllers: [TwitterController],

  providers: [TwitterService],
})
export class AppModule {}
