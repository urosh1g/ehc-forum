import { ICategory } from '@ehc/common/interfaces';
import { Post } from './post.entity';
import { User } from './user.entity'
import { Thread } from './thread.entity'
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

  @ManyToMany(type => User, user => user.categories)
  users!: User[];
  @ManyToMany((type) => Post, (post) => post.categories)
  posts!: Post[];

  @ManyToMany(type => Thread, thread => thread.categories)
  threads!: Thread[];
}

export { Category };
