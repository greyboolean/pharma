import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MedicineEntity } from './entities/medicine.entity';

@Controller('medicines')
@ApiTags('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @Post()
  @ApiCreatedResponse({ type: MedicineEntity })
  create(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicinesService.create(createMedicineDto);
  }

  @Get()
  @ApiOkResponse({ type: MedicineEntity, isArray: true })
  findAll() {
    return this.medicinesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MedicineEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicinesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MedicineEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    return this.medicinesService.update(id, updateMedicineDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MedicineEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicinesService.remove(id);
  }
}
