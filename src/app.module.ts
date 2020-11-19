import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MeResolver } from './me.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.graphql',
    }),
  ],
  controllers: [],
  providers: [MeResolver],
})
export class AppModule {
}
