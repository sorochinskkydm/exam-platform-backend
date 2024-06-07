import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  const configService = new ConfigService();
  const PORT = configService.get<string>('SERVER_PORT');
  const HOST = configService.get<string>('SERVER_HOST');

  const config = new DocumentBuilder()
    .setTitle('Encrypted messenger API')
    .setDescription('The encrypted messenger API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/api', app, document);

  await app.listen(PORT);

  console.log(`Server started on ${PORT} port`);
  console.log(`Swagger available on http://${HOST}:${PORT}/docs/api`);
}
bootstrap();
