import { Post, Category } from '@ehc/common/entities'
import { IUser } from '@ehc/common/interfaces';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(["alias", "email"])
class User implements IUser {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    alias!: string;
    @Column()
    password!: string;
    @Column()
    email!: string;

    @ManyToMany(type => Category, category => category.users)
    @JoinTable()
    categories!: Category[];

    @OneToMany(type => Post, post => post.author)
    posts!: Post[];
}

export { User }