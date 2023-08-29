import { IUser } from '@ehc/common/user'
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

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
}

export { User }