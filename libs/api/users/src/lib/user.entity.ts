import { Category } from '@ehc/api/categories'
import { IUser } from '@ehc/common/user'
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
}

export { User }