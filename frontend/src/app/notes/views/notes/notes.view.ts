import { Component, OnInit } from '@angular/core'
import { NotesService } from '../../../shared/services/notes.service'
import { Note } from '../../../shared/models/note.model'

@Component({
  selector: 'app-views-notes',
  templateUrl: './notes.view.html',
  styleUrl: './notes.view.css'
})
export class NotesView implements OnInit {
  public notes: Note[]

  public constructor(private readonly notesService: NotesService) {}

  public getNotes(): Note[] {
    return this.notesService.getNotes()
  }

  public deleteNoteById(noteId: number): void {
    this.notesService.deleteNoteById(noteId)
  }

  public editNoteById(note: Note): void {
    this.notesService.updateNoteById(note)
  }

  public createNote(note: Note): void {
    this.notesService.createNote(note)
  }

  public ngOnInit(): void {
    this.notes = this.getNotes()
  }
}
