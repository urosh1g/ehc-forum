import { ICreatePost } from "./post.interface";

class CreatePost implements ICreatePost {
    title!: string;
    body!: string;
}

export { CreatePost }