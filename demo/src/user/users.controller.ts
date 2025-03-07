import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // Định nghĩa route chính cho controller là "/users"
export class UsersController {
  constructor(private userService: UsersService) {} // Inject UsersService để thao tác với dữ liệu người dùng

  /**
   * API GET /users
   * Lấy danh sách toàn bộ người dùng từ database
   * @returns Danh sách người dùng và thông báo thành công
   */
  @Get('')
  public async index() {
    const users = await this.userService.getAll(); // Gọi service để lấy danh sách người dùng
    return { message: 'Lấy dữ liệu thành công!!!', users }; // Trả về dữ liệu cùng với thông báo thành công
  }
}
