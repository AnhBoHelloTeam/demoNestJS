import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products/products.controller';
import { UsersModule } from './user/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/demonest'), UsersModule],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
