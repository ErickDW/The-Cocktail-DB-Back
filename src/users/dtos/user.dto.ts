import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsNumber,
  IsPositive
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Role } from '../../auth/models/roles.model';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of user',
    example: 'correo@dominio.com',
    name: 'email',
    title: 'Email',
    type: String,
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({
    description: "The user' password",
    deprecated: true,
    example: 'C0ntr4S3Ñ4@S36Ur4',
    name: 'password',
    title: 'Password',
    type: String,
  })
  password: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "The user' role [admin, other] is a Enum",
    example: 'other',
    enum: ['admin', 'other'],
    title: 'Enum role',
  })
  readonly role: Role;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of user, my name is Paco',
    example: 'Paco',
    type: String,
    title: 'User name',
  })
  readonly userName: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'The phonenumber of user, minimal length for example is 3',
    example: '3173463310',
    type: Number,
    title: 'User phonenumber',
  })
  readonly phoneNumber: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
