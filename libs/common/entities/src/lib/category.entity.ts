import { IUser, ICategory } from '@ehc/common/interfaces';
import { Post } from './post.entity';
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['name'])
class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;

  users!: IUser[];
  @ManyToMany((type) => Post, (post) => post.categories)
  posts!: Post[];
}

export { Category };
