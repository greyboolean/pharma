import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { MedicinesModule } from './medicines/medicines.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [PrismaModule, UsersModule, MedicinesModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
