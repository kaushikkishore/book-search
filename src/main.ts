import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // This port can be taken from the environment variables. 
  await app.listen(3000);
}
bootstrap();
