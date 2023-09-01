import { ICreateComment, IUpdateComment } from "@ehc/common/interfaces";
import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

class CreateComment implements ICreateComment {
    @IsNotEmpty()
    @IsNumber()
    authorId!: number;
    @IsNotEmpty()
    @IsNumber()
    postId!: number;
    @IsNotEmpty()
    @IsString()
    body!: string;
}

class UpdateComment implements IUpdateComment {
    @IsNotEmpty()
    @IsString()
    body!: string;
}

class CommentQuery {
    @Transform((v) => Boolean(v))
    @IsOptional()
    @IsBoolean()
    author?: boolean;
    @Transform((v) => Boolean(v))
    @IsOptional()
    @IsBoolean()
    post?: boolean;
}

export { CreateComment, UpdateComment, CommentQuery }