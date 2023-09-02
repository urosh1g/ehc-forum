import { Comment } from './comment.entity';
import { Post } from './post.entity';
import { Category } from './category.entity';
import { IUser } from '@ehc/common/interfaces';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
@Unique(['alias', 'email'])
class User implements IUser {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  alias!: string;
  @Column()
  @Exclude()
  password!: string;
  @Column()
  email!: string;

  @ManyToMany((type) => Category, (category) => category.users)
  @JoinTable()
  categories!: Category[];

  @OneToMany((type) => Post, (post) => post.author)
  posts!: Post[];

  @OneToMany((type) => Comment, (comment) => comment.author)
  comments!: Comment[];
}

export { User };
