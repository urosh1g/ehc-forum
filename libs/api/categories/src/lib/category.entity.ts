import { ICategory } from '@ehc/common/category'
import { IUser } from '@ehc/common/user'
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
class Category implements ICategory {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;

    users!: IUser[];
}

export { Category }