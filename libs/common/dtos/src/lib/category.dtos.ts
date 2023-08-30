import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ICreateCategory, IUpdateCategory } from '@ehc/common/interfaces';
import { Transform } from 'class-transformer';

class CreateCategory implements ICreateCategory {
  @IsString()
  @IsNotEmpty()
  name!: string;
}

class UpdateCategory implements IUpdateCategory {}

class CategoryQuery {
  @Transform((v) => Boolean(v))
  @IsBoolean()
  @IsOptional()
  users?: boolean;
  @Transform((v) => Boolean(v))
  @IsBoolean()
  @IsOptional()
  posts?: boolean;
  @Transform((v) => Boolean(v))
  @IsBoolean()
  @IsOptional()
  threads?: boolean;
}

export { CreateCategory, UpdateCategory, CategoryQuery };
