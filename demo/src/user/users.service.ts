import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Model } from 'mongoose';

@Injectable() // Đánh dấu class này là một service có thể được inject trong hệ thống DI của NestJS
export class UsersService {
  // Inject model User để thao tác với MongoDB thông qua Mongoose
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   * Lấy tất cả người dùng từ database
   * @returns Danh sách tất cả người dùng trong collection
   */
  public async getAll() {
    return this.userModel.find({}); // Truy vấn MongoDB để lấy toàn bộ dữ liệu từ collection users
  }
}
