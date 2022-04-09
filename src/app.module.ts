import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PipelineModule } from './modules/pipeline/pipeline.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), PipelineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
