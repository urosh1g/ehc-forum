import { IPost } from './post.interface';
import { IUser } from './user.interface';

interface IComment {
  id: number;
  author: IUser;
  post: IPost;
  body: string;
}

type ICreateComment = {
  postId: number;
  body: string;
};

type IUpdateComment = Pick<IComment, 'body'>;

export { IComment, ICreateComment, IUpdateComment };
