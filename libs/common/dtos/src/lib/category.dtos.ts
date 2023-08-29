import { IsNotEmpty, IsString } from "class-validator";
import { ICreateCategory } from "@ehc/common/interfaces";

//TODO UpdateCategoryDto

class CreateCategory implements ICreateCategory {
    @IsString()
    @IsNotEmpty()
    name!: string;
}

export { CreateCategory }