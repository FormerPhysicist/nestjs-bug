import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import ApplicationModule from './ApplicationModule';

/**
 * The entry point for the Nest microservice.
 */
async function bootstrap(): Promise<void> {
  // Disable logging for the FastifyAdapter and use console as the logger for
  // the whole application to disable the color (useful when deploying to Apigee).
  const app = await NestFactory.create<NestFastifyApplication>(
    ApplicationModule,
    new FastifyAdapter({ logger: false }),
    { logger: console }
  );

  await app.listen(3000, '0.0.0.0');
}

// Start the microservice.
bootstrap();
