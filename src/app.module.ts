import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { VenueModule } from './venue/venue.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/coworking', {
      connectionFactory: (connection) => {
        console.log('✅ Connected to MongoDB:', connection.name);
        return connection;
      },
    }),
    UserModule,
    BookingModule,
    VenueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
