import { ICategory } from "./category.interface";
import { IPost } from "./post.interface";

interface IThread {
    id: number;
    name: string;
    categories: ICategory[];
    posts: IPost[];
}

type ICreateThread = Partial<Omit<IThread, 'id'>>;
type IUpdateThread = Pick<IThread, 'name'>;

export { IThread, ICreateThread, IUpdateThread }