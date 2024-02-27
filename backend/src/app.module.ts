import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NotesModule } from './notes/notes.module'
import { NoteEntity } from './shared/database/note.entity'
import { CategoriesModule } from './categories/categories.module'
import { CategoryEntity } from './shared/database/category.entity'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'notes-app',
      synchronize: true,
      entities: [NoteEntity, CategoryEntity]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/browser')
    }),
    NotesModule,
    CategoriesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
