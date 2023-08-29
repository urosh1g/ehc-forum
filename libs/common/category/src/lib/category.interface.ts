import { IUser } from '@ehc/common/user'

interface ICategory {
  id: number;
  name: string;
  users: IUser[];
}

type ICreateCategory = Pick<ICategory, 'name'>;
type IUpdateCategory = Partial<ICreateCategory>;

export { ICategory, ICreateCategory, IUpdateCategory }