import { Query, Resolver } from '@nestjs/graphql';
import { Me } from './me';

@Resolver()
export class MeResolver {

  @Query(() => Me, { name: 'me' })
  getMe() {
    return {
      name: 'Ben',
    };
  }
}
