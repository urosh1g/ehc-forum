import { IsNotEmpty, IsString } from "class-validator";
import { ICreateCategory, IUpdateCategory } from "./category.interface";
import { IUser } from "@ehc/common/user";

//TODO UpdateCategoryDto

class CreateCategory implements ICreateCategory {
    @IsString()
    @IsNotEmpty()
    name!: string;
}

export { CreateCategory }