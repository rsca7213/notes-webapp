import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Category } from '../models/category.model'

@Entity()
export class CategoryEntity implements Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
