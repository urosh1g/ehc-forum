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
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
class Post implements IPost {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  title!: string;
  @Column()
  body!: string;

  @ManyToMany((type) => Category, (category) => category.posts, {
    cascade: true,
  })
  @JoinTable()
  categories!: Category[];

  @ManyToOne((type) => User, (user) => user.posts, { cascade: true })
  author!: User;

  @ManyToOne((type) => Thread, (thread) => thread.posts, { cascade: true })
  thread!: Thread;

  @OneToMany((type) => Comment, (comment) => comment.post)
  comments!: Comment[];
}

export { Post };
