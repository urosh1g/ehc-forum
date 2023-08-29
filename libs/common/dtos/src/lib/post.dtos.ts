import { ICreatePost, IUpdatePost } from '@ehc/common/interfaces';

class CreatePost implements ICreatePost {
  title!: string;
  body!: string;
}

class UpdatePost implements IUpdatePost {}

export { CreatePost, UpdatePost };
