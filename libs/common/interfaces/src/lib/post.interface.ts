interface IPost {
  id: number;
  title: string;
  body: string;
}

type ICreatePost = Omit<IPost, 'id'>;
type IUpdatePost = Partial<ICreatePost>;

export { IPost, ICreatePost, IUpdatePost };
