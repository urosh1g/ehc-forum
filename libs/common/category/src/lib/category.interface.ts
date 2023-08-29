interface ICategory {
  id: number;
  name: string;
}

type ICreateCategory = Pick<ICategory, 'name'>;
type IUpdateCategory = Partial<ICreateCategory>;

export { ICategory, ICreateCategory, IUpdateCategory }