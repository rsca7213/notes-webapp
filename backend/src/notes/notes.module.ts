import { Module } from '@nestjs/common'
import { NotesController } from './notes.controller'
import { NotesService } from './notes.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NoteEntity } from 'src/shared/database/note.entity'
import { CategoriesService } from 'src/categories/categories.service'
import { CategoryEntity } from 'src/shared/database/category.entity'

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity, CategoryEntity])],
  controllers: [NotesController],
  providers: [NotesService, CategoriesService]
})
export class NotesModule {}
