import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Note } from '../models/note.model'
import { CategoryEntity } from './category.entity'

@Entity()
export class NoteEntity implements Note {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  @Column()
  archived: boolean

  @ManyToMany(() => CategoryEntity)
  @JoinTable()
  categories: CategoryEntity[]
}
