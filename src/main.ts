import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { join } from 'path';
import fastifyStatic from '@fastify/static';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // 支持静态资源访问
  app.register(fastifyStatic, {
    root: join(__dirname, '..', 'public'),
    prefix: '/static',
  });

  await app.listen(3000);
}
bootstrap();
