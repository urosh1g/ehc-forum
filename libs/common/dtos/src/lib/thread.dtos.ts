import { ICreateThread, IUpdateThread } from '@ehc/common/interfaces';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateThread implements ICreateThread {
  @IsString()
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  categoryIds!: number[];
}
class UpdateThread implements IUpdateThread {
  name!: string;
}

class ThreadQuery {
  @Transform((v) => Boolean(v))
  @IsOptional()
  @IsBoolean()
  posts?: boolean;
  @Transform((v) => Boolean(v))
  @IsOptional()
  @IsBoolean()
  categories?: boolean;
}

export { CreateThread, UpdateThread, ThreadQuery };
