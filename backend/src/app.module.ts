import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NotesModule } from './notes/notes.module'
import { NoteEntity } from './shared/database/note.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'notes-app',
      synchronize: true,
      entities: [NoteEntity]
    }),
    NotesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
