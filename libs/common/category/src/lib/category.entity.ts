import { ICategory } from '@ehc/common/category'
import { IUser } from '@ehc/common/user'
import { Post } from '@ehc/common/post'
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
class Category implements ICategory {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;

    users!: IUser[];
    @ManyToMany(type => Post, post => post.categories)
    posts!: Post[];
}

export { Category }