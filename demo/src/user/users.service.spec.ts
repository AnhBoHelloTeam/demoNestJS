import { Test, TestingModule } from '@nestjs/testing'; // Import các module cần thiết để test
import { UsersService } from './users.service'; // Import service cần kiểm thử

describe('UsersService', () => {
  let service: UsersService; // Khai báo biến service để sử dụng trong các bài test

  beforeEach(async () => {
    // Tạo một module kiểm thử cho UsersService
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService], // Cung cấp UsersService vào module test
    }).compile();

    service = module.get<UsersService>(UsersService); // Lấy instance của service từ module
  });

  it('should be defined', () => {
    // Kiểm tra xem service có được khởi tạo hay không
    expect(service).toBeDefined();
  });
});
