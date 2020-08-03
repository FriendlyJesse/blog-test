import { Prop } from '@typegoose/typegoose'

export class Post {
  @Prop()
  title: string

  @Prop()
  content: string
}