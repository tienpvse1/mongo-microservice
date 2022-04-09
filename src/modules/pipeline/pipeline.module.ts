import { Module } from '@nestjs/common';
import { PipelineService } from './pipeline.service';
import { PipelineController } from './pipeline.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pipeline, PipelineSchema } from './entities/pipeline.entity';

@Module({
  controllers: [PipelineController],
  providers: [PipelineService],
  imports: [
    MongooseModule.forFeature([
      { name: Pipeline.name, schema: PipelineSchema },
    ]),
  ],
})
export class PipelineModule {}
