import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:natberh@cluster0.xuvoryk.mongodb.net/?retryWrites=true&w=majority'),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
