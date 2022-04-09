import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Stage } from './pipeline.ref';

export type PipelineDocument = Pipeline & Document;

@Schema()
export class Pipeline {
  @Prop({ required: true })
  name: string;

  @Prop()
  stages: Stage[];
}

export const PipelineSchema = SchemaFactory.createForClass(Pipeline);
