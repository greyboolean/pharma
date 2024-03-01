import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty({ required: false, nullable: true })
  deletedAt?: Date;
}
