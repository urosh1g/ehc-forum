interface IUser {
  id: number;
  alias: string;
  password: string;
  email: string;
}

type IUserDto = Omit<IUser, 'password'>;
type ICreateUser = Pick<IUser, 'alias' | 'password' | 'email'>;
type IUpdateUser = Partial<ICreateUser>;

export { IUser, IUserDto, ICreateUser, IUpdateUser };
