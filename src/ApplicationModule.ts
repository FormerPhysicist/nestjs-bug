import { Module } from '@nestjs/common';
import MyController from './MyController';

/**
 * The root Application module that imports all the sub modules that make up a complete application.
 *
 * See here for more information on modules: https://docs.nestjs.com/modules
 */
@Module({
  controllers: [MyController]
})
export default class ApplicationModule {}
