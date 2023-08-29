import { ICategory } from '@ehc/common/category'
import { User } from '@ehc/api/users'
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
class Category implements ICategory {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;

    users!: User[];
}

export { Category }