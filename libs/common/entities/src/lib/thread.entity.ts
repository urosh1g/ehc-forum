import { IPost, IThread } from '@ehc/common/interfaces';
import { Post } from './post.entity';
import { Category } from './category.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Thread implements IThread {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @ManyToMany((type) => Category, (category) => category.threads)
  @JoinTable()
  categories!: Category[];

  @OneToMany((type) => Post, (post) => post.thread)
  posts!: Post[];
}

export { Thread };
