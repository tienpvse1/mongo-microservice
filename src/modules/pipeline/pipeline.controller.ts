import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePipelineDto } from './dto/create-pipeline.dto';
import { PipelineService } from './pipeline.service';

@Controller('pipeline')
export class PipelineController {
  constructor(private readonly pipelineService: PipelineService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createPipelineDto: CreatePipelineDto) {
    return this.pipelineService.create(createPipelineDto);
  }

  @Get()
  findAll() {
    return this.pipelineService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.pipelineService.findOne(id);
  }

  @Put(':id')
  replaceCurrentPipeline(
    @Body() replaceDto: CreatePipelineDto,
    @Param('id') id: string,
  ) {
    return this.pipelineService.replacePipeline(replaceDto, id);
  }
}
