import { ApiProperty } from '@nestjs/swagger';
import { Medicine } from '@prisma/client';

export class MedicineEntity implements Medicine {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty({ required: false, nullable: true })
  deletedAt: Date | null;
}
