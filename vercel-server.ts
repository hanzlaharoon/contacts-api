import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { createServer, IncomingMessage, request, ServerResponse } from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  createServer((req: IncomingMessage, res: ServerResponse) => {
    app.getHttpAdapter().getInstance()(req, res);
  }).listen(3000);
}

bootstrap();
