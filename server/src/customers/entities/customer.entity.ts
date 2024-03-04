import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '@prisma/client';

export class CustomerEntity implements Customer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty({ required: false, nullable: true })
  deletedAt: Date | null;
}
