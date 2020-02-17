import { Controller, All } from '@nestjs/common';

@Controller('/')
export default class MyController {
  /**
   * Handles all routes that are sent to the microservice.
   */
  @All('*')
  public async handler(): Promise<string> {
    return 'Hello from the All route handler.';
  }
}
