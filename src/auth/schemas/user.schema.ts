import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


@Schema({
  timestamps: true
})

export class User {
  @ApiProperty({example: 'Bob@gmail.com', description: 'User email'})
  @Prop({unique: [true, 'Duplicate email entered! ']})
  email: string

  @ApiProperty({example: 'password', description: 'User password'})
  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)