import { IPost } from '@ehc/common/interfaces';
import { Thread } from './thread.entity';
import { Category } from './category.entity';
import { User } from './user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Post implements IPost {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  title!: string;
  @Column()
  body!: string;

  @ManyToMany((type) => Category, (category) => category.posts)
  @JoinTable()
  categories!: Category[];

  @ManyToOne((type) => User, (user) => user.posts)
  author!: User;

  @ManyToOne((type) => Thread, (thread) => thread.posts)
  thread!: Thread;
}

export { Post };
