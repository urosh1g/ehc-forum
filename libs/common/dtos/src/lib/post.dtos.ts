import { ICreatePost, IUpdatePost } from '@ehc/common/interfaces';
import {
  IsBoolean,
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';
import { Transform } from 'class-transformer';

class CreatePost implements ICreatePost {
  @IsString()
  @IsNotEmpty()
  title!: string;
  @IsString()
  @IsNotEmpty()
  body!: string;
  @IsNotEmpty()
  categoryIds!: number[];
  @IsNotEmpty()
  @IsNumber()
  threadId!: number;
  @IsNotEmpty()
  @IsNumber()
  authorId!: number;
}

class UpdatePost implements IUpdatePost {}

class PostQuery {
  @Transform((v) => Boolean(v))
  @IsBoolean()
  @IsOptional()
  author?: boolean;
  @Transform((v) => Boolean(v))
  @IsBoolean()
  @IsOptional()
  comments?: boolean;
  @IsOptional()
  @IsBoolean()
  @Transform((v) => Boolean(v))
  categories?: boolean;
  @IsOptional()
  @IsBoolean()
  @Transform((v) => Boolean(v))
  thread?: boolean;
}

export { CreatePost, UpdatePost, PostQuery };
