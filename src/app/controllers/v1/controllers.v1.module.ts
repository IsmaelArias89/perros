import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

export const CONTROLLERS = [AppController];
@Module({
  imports: [],
  providers: [],
  controllers: CONTROLLERS,
})
export class ControllersV1Module {}
