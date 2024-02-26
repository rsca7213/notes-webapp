import { Injectable } from '@angular/core'
import { Note } from '../models/note.model'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Note[] = [
    {
      id: 1,
      title: 'Shopping list',
      content: 'Milk, eggs, bread, beer',
      created_at: new Date(),
      updated_at: new Date(),
      archived: false
    },
    {
      id: 2,
      title: 'Workout plan',
      content: 'Run 5k, 20 pushups, 20 squats, 20 situps',
      created_at: new Date(),
      updated_at: new Date(),
      archived: false
    },
    {
      id: 3,
      title: 'Movies to watch',
      content:
        "The Godfather, The Shawshank Redemption, Pulp Fiction, The Dark Knight, Schindler's List, The Lord of the Rings: The Return of the King",
      created_at: new Date(),
      updated_at: new Date(),
      archived: false
    }
  ]

  public constructor() {}

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
    const maxId = Math.max(...this.notes.map(note => note.id))

    note.id = maxId + 1
    note.created_at = new Date()
    note.updated_at = new Date()
    note.archived = false

    this.notes.push(note)
  }

  public updateNote(data: Note): void {
    const note = this.getNoteById(data.id)
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
    const note = this.getNoteById(id)
    if (note) {
      note.archived = !note.archived
      note.updated_at = new Date()
    }
  }
}
