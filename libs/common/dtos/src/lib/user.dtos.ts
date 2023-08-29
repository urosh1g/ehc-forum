import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ICreateUser, IUpdateUser } from '@ehc/common/interfaces';

class CreateUser implements ICreateUser {
  @IsNotEmpty()
  @IsString()
  alias!: string;
  @IsNotEmpty()
  @IsStrongPassword()
  password!: string;
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}

class UpdateUser implements IUpdateUser {}

export { CreateUser, UpdateUser };
