interface ICategory {
  id: number;
  name: string;
}

type ICreateCategory = Omit<ICategory, 'id'>;
type IUpdateCategory = Partial<ICreateCategory>;

export { ICategory, ICreateCategory, IUpdateCategory }