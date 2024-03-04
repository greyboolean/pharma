import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;

  @IsEnum(Role)
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  role: Role;

  @IsDate()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  deletedAt?: Date;
}
