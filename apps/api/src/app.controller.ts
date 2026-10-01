import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service.js';
import { AuthGuard } from '@nestjs/passport';
import { RouteConfig } from '@nestjs/platform-fastify/decorators/index.js';
import type { FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @RouteConfig({ output: 'hello world' })
  @Get()
  index(@Request() req: any) {
    return req.routeConfig.output;
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req: FastifyRequest) {
    return req.user;
  }
}
