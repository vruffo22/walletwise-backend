import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET, POST, PUT, DELETE',
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
