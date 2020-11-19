import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeResolver } from './me.resolver';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: 'schema.graphql'
  })],
  controllers: [AppController],
  providers: [AppService, MeResolver],
})
export class AppModule {}
