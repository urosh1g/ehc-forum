import { ICreatePost } from '@ehc/common/interfaces';

class CreatePost implements ICreatePost {
  title!: string;
  body!: string;
}

export { CreatePost };
