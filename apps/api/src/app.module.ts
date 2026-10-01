import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { CoursesModule } from './courses/courses.module.js';
import { ExperiencesModule } from './experiences/experiences.module.js';
import { EducationModule } from './education/education.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [CoursesModule, UsersModule, ExperiencesModule, EducationModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
