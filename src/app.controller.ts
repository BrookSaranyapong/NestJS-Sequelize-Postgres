import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/') // localhost:4000/api
  getHomeAPI() {
    return {
      version: '1.0.0',
      message: 'NestJS API running...',
    };
  }

  @Get('/hello') // localhost:4000/api/hello
  getHello(): string {
    return this.appService.getHello();
  }
}
