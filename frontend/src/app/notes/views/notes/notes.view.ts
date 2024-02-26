import { Component, OnInit, ViewChild } from '@angular/core'
import { NotesService } from '../../../shared/services/notes.service'
import { Note } from '../../../shared/models/note.model'
import { CreateNoteModalComponent } from '../../components/create-note-modal/create-note-modal.component'
import { UpdateNoteModalComponent } from '../../components/update-note-modal/update-note-modal.component'
import { DeleteNoteModalComponent } from '../../components/delete-note-modal/delete-note-modal.component'

@Component({
  selector: 'app-views-notes',
  templateUrl: './notes.view.html',
  styleUrl: './notes.view.css'
})
export class NotesView implements OnInit {
  public notes: Note[]

  public filters = {
    notes: 'Active' as 'All' | 'Active' | 'Archived'
  }

  @ViewChild(CreateNoteModalComponent) public createNoteModalComponent: CreateNoteModalComponent
  @ViewChild(UpdateNoteModalComponent) public updateNoteModalComponent: UpdateNoteModalComponent
  @ViewChild(DeleteNoteModalComponent) public deleteNoteModalComponent: DeleteNoteModalComponent

  public constructor(private readonly notesService: NotesService) {}

  public openCreateNoteModal(): void {
    this.createNoteModalComponent.openModal()
  }

  public openUpdateNoteModal(note: Note): void {
    this.updateNoteModalComponent.openModal(note)
  }

  public openDeleteNoteModal(note: Note): void {
    this.deleteNoteModalComponent.openModal(note)
  }

  public getNotes(): Note[] {
    let notes: Note[] = []
    notes = notes.concat(
      this.filters.notes === 'Active' || this.filters.notes === 'All' ? this.notesService.getActiveNotes() : []
    )
    notes = notes.concat(
      this.filters.notes === 'Archived' || this.filters.notes === 'All' ? this.notesService.getArchivedNotes() : []
    )

    return notes
  }

  public deleteNoteById(noteId: number): void {
    this.notesService.deleteNoteById(noteId)
    this.notes = this.getNotes()
  }

  public updateNote(note: Note): void {
    this.notesService.updateNote(note)
  }

  public createNote(note: Note): void {
    this.notesService.createNote(note)
  }

  public changeNoteArchiveStateById(noteId: number): void {
    this.notesService.changeNoteArchiveStateById(noteId)
    this.notes = this.getNotes()
  }

  public updateFilters(): void {
    this.notes = this.getNotes()
  }

  public ngOnInit(): void {
    this.notes = this.getNotes()
  }
}
