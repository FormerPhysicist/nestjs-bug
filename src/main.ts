import { NestFactory } from '@nestjs/core';
import ApplicationModule from './ApplicationModule';

/**
 * The entry point for the Nest microservice.
 */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
}

// Start the microservice.
bootstrap();
