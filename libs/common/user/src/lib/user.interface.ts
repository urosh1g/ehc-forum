interface IUser {
    id: number;
    alias: string;
    password: string;
    email: string;
}

type IUserDto = Omit<IUser, 'password'>;
type ICreateUser = Omit<IUser, 'id'>;
type IUpdateUser = Partial<ICreateUser>;

export { IUser, IUserDto, ICreateUser, IUpdateUser }