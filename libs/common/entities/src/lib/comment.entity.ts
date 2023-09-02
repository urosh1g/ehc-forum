import { IComment } from '@ehc/common/interfaces';
import { User } from './user.entity';
import { Post } from './post.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Comment implements IComment {
  @PrimaryGeneratedColumn()
  id!: number;
  @ManyToOne((type) => User, (user) => user.comments, { cascade: true })
  author!: User;
  @ManyToOne((type) => Post, (post) => post.comments, { cascade: true })
  post!: Post;
  @Column()
  body!: string;
}

export { Comment };
