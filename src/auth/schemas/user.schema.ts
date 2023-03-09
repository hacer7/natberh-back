import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


@Schema({
  timestamps: true
})

export class User {
  @Prop({unique: [true, 'Duplicate email entered! ']})
  email: string

  @Prop()
  password: string

  @ApiProperty({example: 'token', description: 'token'})
  token: string
}

export const UserSchema = SchemaFactory.createForClass(User)