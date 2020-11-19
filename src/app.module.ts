import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeResolver } from './me.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MeResolver],
})
export class AppModule {
}
