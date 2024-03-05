import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MedicinesController],
  providers: [MedicinesService],
  imports: [PrismaModule],
})
export class MedicinesModule {}
