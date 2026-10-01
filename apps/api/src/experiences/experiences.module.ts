import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences.service.js';
import { ExperiencesController } from './experiences.controller.js';

@Module({
  controllers: [ExperiencesController],
  providers: [ExperiencesService],
})
export class ExperiencesModule {}
