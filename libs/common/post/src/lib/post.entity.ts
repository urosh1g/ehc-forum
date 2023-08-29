import { IPost } from '@ehc/common/post'
import { Category } from '@ehc/common/category'
import { User } from '@ehc/common/user'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Post implements IPost {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    title!: string;
    @Column()
    body!: string;

    @ManyToMany(type => Category, category => category.posts)
    @JoinTable()
    categories!: Category[];

    @ManyToOne(type => User, user => user.posts)
    author!: User;
}

export { Post }