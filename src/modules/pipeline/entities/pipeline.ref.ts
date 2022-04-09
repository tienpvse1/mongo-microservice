import { Prop } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsString,
  Length,
  ValidateNested,
  IsObject,
  IsInt,
  IsArray,
} from 'class-validator';
class Course {
  @Prop()
  @IsString()
  name: string;

  @Prop()
  @IsString()
  code: string;

  @Prop({ default: new Date() })
  startDate: Date;

  @Prop({ default: new Date() })
  endDate: Date;
}

export class Account {
  @Prop()
  @IsString()
  username: string;

  @Prop()
  @IsString()
  firstName: string;

  @Prop()
  @IsString()
  lastName: string;

  @Prop()
  @IsEmail()
  email: string;

  @Prop({ default: new Date() })
  birth: Date;
}

export class PipelineItem {
  @Prop()
  @IsString()
  name: string;

  @Prop()
  @IsNumber()
  expectedRevenue: number;
  @Prop()
  @IsInt()
  index: number;

  @Prop()
  @ValidateNested()
  @IsObject()
  @Type(() => Course)
  course: Course;

  @Prop()
  quantity: string;

  @Prop()
  @ValidateNested()
  @IsObject()
  @Type(() => Account)
  account: Account;
}

export class Stage {
  @Prop({ required: true })
  @Length(2)
  name: string;

  @Prop({ required: true, default: 1 })
  @IsNumber()
  index: number;

  @Prop()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PipelineItem)
  pipelineItems: PipelineItem[];
}
