import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NotesModule } from './notes/notes.module'
import { NoteEntity } from './shared/database/note.entity'
import { CategoriesModule } from './categories/categories.module'
import { CategoryEntity } from './shared/database/category.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'notes-app',
      synchronize: true,
      entities: [NoteEntity, CategoryEntity]
    }),
    NotesModule,
    CategoriesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
