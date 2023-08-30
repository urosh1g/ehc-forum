import { IsNotEmpty, IsString } from 'class-validator';
import { ICreateCategory, IUpdateCategory } from '@ehc/common/interfaces';

//TODO UpdateCategoryDto

class CreateCategory implements ICreateCategory {
  @IsString()
  @IsNotEmpty()
  name!: string;
}

class UpdateCategory implements IUpdateCategory {}

export { CreateCategory, UpdateCategory };
