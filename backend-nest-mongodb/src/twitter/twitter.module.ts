import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { Twitter, TwitterSchema } from './schemas/twitter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Twitter.name, schema: TwitterSchema }]),
  ],

  exports: [MongooseModule],
})
export class TwitterModule {}
