import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Me {
  name: string;
}
