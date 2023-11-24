import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('task-micro');
  const config = new DocumentBuilder()
    .setTitle('Task Microservice API')
    .setDescription('API documentation for the Task Microservice')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001).then(() => {
    console.log('Task-MicroService is running on Port:3001');
  });
}
bootstrap();
