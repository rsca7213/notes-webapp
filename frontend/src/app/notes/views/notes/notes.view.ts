import { Component, OnInit, ViewChild } from '@angular/core'
import { NotesService } from '../../../shared/services/notes.service'
import { Note } from '../../../shared/models/note.model'
import { CreateNoteModalComponent } from '../../components/create-note-modal/create-note-modal.component'
import { UpdateNoteModalComponent } from '../../components/update-note-modal/update-note-modal.component'

@Component({
  selector: 'app-views-notes',
  templateUrl: './notes.view.html',
  styleUrl: './notes.view.css'
})
export class NotesView implements OnInit {
  public notes: Note[]

  @ViewChild(CreateNoteModalComponent) public createNoteModalComponent: CreateNoteModalComponent
  @ViewChild(UpdateNoteModalComponent) public updateNoteModalComponent: UpdateNoteModalComponent

  public constructor(private readonly notesService: NotesService) {}

  public openCreateNoteModal(): void {
    this.createNoteModalComponent.openModal()
  }

  public openUpdateNoteModal(note: Note): void {
    this.updateNoteModalComponent.openModal(note)
  }

  public getNotes(): Note[] {
    return this.notesService.getNotes()
  }

  public deleteNoteById(noteId: number): void {
    this.notesService.deleteNoteById(noteId)
  }

  public updateNote(note: Note): void {
    this.notesService.updateNote(note)
  }

  public createNote(note: Note): void {
    this.notesService.createNote(note)
  }

  public ngOnInit(): void {
    this.notes = this.getNotes()
  }
}
