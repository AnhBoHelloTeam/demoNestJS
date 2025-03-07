import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController; // Biến để lưu instance của controller

  beforeEach(async () => {
    // Tạo module kiểm thử cho UsersController
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController], // Định nghĩa UsersController trong module test
    }).compile();

    controller = module.get<UsersController>(UsersController); // Lấy instance của UsersController
  });

  it('should be defined', () => {
    expect(controller).toBeDefined(); // Kiểm tra xem controller có được khởi tạo hay không
  });
});
