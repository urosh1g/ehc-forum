import { IsNotEmpty, IsString } from "class-validator";
import { ICreateCategory, IUpdateCategory } from "./category.interface";

//TODO UpdateCategoryDto

class CreateCategory implements ICreateCategory {
    @IsString()
    @IsNotEmpty()
    name!: string;
}

export { CreateCategory }