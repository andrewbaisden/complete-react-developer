import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type TwitterDocument = Twitter & Document;

@Schema()
export class Twitter {
  @Prop()
  tweet: string;

  @Prop()
  img: string;
}

export const TwitterSchema = SchemaFactory.createForClass(Twitter);
