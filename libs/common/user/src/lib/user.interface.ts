import { ICategory } from '@ehc/common/category';

interface IUser {
  id: number;
  alias: string;
  password: string;
  email: string;

  //active in these categories
  categories: ICategory[];
}

type IUserDto = Omit<IUser, 'password'>;
type ICreateUser = Pick<IUser, 'alias' | 'password' | 'email'>;
type IUpdateUser = Partial<ICreateUser>;

export { IUser, IUserDto, ICreateUser, IUpdateUser };
