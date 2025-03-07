import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    // Đăng ký model User với Mongoose để có thể sử dụng trong UsersService
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController], // Khai báo controller xử lý các yêu cầu HTTP liên quan đến User
  providers: [UsersService], // Cung cấp UsersService để xử lý logic nghiệp vụ
})
export class UsersModule {}
