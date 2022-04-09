import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePipelineDto } from './dto/create-pipeline.dto';
import { Pipeline, PipelineDocument } from './entities/pipeline.entity';
@Injectable()
export class PipelineService {
  constructor(
    @InjectModel(Pipeline.name) private pipelineModel: Model<PipelineDocument>,
  ) {}
  async create(createPipelineDto: CreatePipelineDto) {
    const createPipeline = new this.pipelineModel(createPipelineDto);
    return createPipeline.save();
  }

  findAll() {
    return this.pipelineModel.find().exec();
  }
  findOne(id: string) {
    return this.pipelineModel.findOne({ _id: id }).exec();
  }

  async replacePipeline(dto: CreatePipelineDto, id: string) {
    return this.pipelineModel.replaceOne({ _id: id }, dto);
  }
}
