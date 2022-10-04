import { Module } from '@nestjs/common';
import { ControllersV1Module } from './app/controllers/v1/controllers.v1.module';
@Module({
  imports: [ControllersV1Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
