import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  Length,
  ValidateNested,
} from 'class-validator';
import { Stage } from '../entities/pipeline.ref';
export class CreatePipelineDto {
  @Length(2)
  name: string;
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Stage)
  stages: Stage[];
}
