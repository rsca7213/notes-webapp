import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { NoteEntity } from 'src/shared/database/note.entity'
import { Note } from 'src/shared/models/note.model'
import { Repository } from 'typeorm'

@Injectable()
export class NotesService {
  public constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>
  ) {}

  public async getActiveNotes(): Promise<Note[]> {
    return this.noteRepository.findBy({ archived: false })
  }

  public async getArchivedNotes(): Promise<Note[]> {
    return this.noteRepository.findBy({ archived: true })
  }

  public async getNoteById(id: number): Promise<Note> {
    return this.noteRepository.findOneBy({ id })
  }

  public async createNote(note: Note): Promise<void> {
    await this.noteRepository.save({
      created_at: new Date(),
      updated_at: new Date(),
      title: note.title,
      content: note.content,
      archived: false
    })
  }

  public async updateNoteById(id: number, data: Note): Promise<void> {
    await this.noteRepository.update(
      { id },
      {
        title: data.title,
        content: data.content,
        updated_at: new Date()
      }
    )
  }

  public async deleteNoteById(id: number): Promise<void> {
    await this.noteRepository.delete({ id })
  }

  public async changeNoteArchiveStateById(id: number): Promise<void> {
    const note = await this.noteRepository.findOneBy({ id })

    if (note) {
      note.archived = !note.archived
      await this.noteRepository.save(note)
    }
  }
}
