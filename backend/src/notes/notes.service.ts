import { Injectable } from '@nestjs/common'
import { Note } from 'src/shared/models/note.model'

@Injectable()
export class NotesService {
  private notes: Note[] = []

  public getActiveNotes(): Note[] {
    return this.notes.filter(note => !note.archived)
  }

  public getArchivedNotes(): Note[] {
    return this.notes.filter(note => note.archived)
  }

  public getNoteById(id: number): Note | undefined {
    return this.notes.find(note => note.id === id)
  }

  public createNote(note: Note): void {
    const maxId = Math.max(...[...this.notes.map(note => note.id), 0])

    this.notes.push({
      id: maxId + 1,
      title: note.title,
      content: note.content,
      created_at: new Date(),
      updated_at: new Date(),
      archived: false
    })
  }

  public updateNoteById(id: number, data: Note): void {
    const note = this.notes.find(note => note.id === id)

    if (note) {
      note.title = data.title
      note.content = data.content
      note.updated_at = new Date()
    }
  }

  public deleteNoteById(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id)
  }

  public changeNoteArchiveStateById(id: number): void {
    const note = this.notes.find(note => note.id === id)

    if (note) {
      note.archived = !note.archived
    }
  }
}
