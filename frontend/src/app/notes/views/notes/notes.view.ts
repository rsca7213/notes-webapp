import { Component, OnInit, ViewChild } from '@angular/core'
import { NotesService } from '../../../shared/services/notes.service'
import { Note } from '../../../shared/models/note.model'
import { CreateNoteModalComponent } from '../../components/create-note-modal/create-note-modal.component'
import { UpdateNoteModalComponent } from '../../components/update-note-modal/update-note-modal.component'
import { DeleteNoteModalComponent } from '../../components/delete-note-modal/delete-note-modal.component'
import { lastValueFrom } from 'rxjs'

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

  public async getNotes(): Promise<Note[]> {
    let notes: Note[] = []

    try {
      if (['All', 'Active'].includes(this.filters.notes)) {
        this.notesService.getActiveNotes()

        notes = notes.concat(await lastValueFrom(this.notesService.getActiveNotes()))
      }

      if (['All', 'Archived'].includes(this.filters.notes)) {
        this.notesService.getArchivedNotes()

        notes = notes.concat(await lastValueFrom(this.notesService.getArchivedNotes()))
      }

      return notes
    } catch {
      // handle error TODO
      return []
    }
  }

  public deleteNoteById(noteId: number): void {
    this.notesService.deleteNoteById(noteId).subscribe({
      next: () => {
        this.notes = this.notes.filter(note => note.id !== noteId)
      },
      error: () => {
        // handle error TODO
      }
    })
  }

  public updateNote(data: Note): void {
    this.notesService.updateNote(data).subscribe({
      next: () => {
        const note = this.notes.find(note => note.id === data.id)

        if (note) {
          note.title = data.title
          note.content = data.content
          note.updated_at = new Date()
        }
      },
      error: () => {
        // handle error TODO
      }
    })
  }

  public createNote(note: Note): void {
    this.notesService.createNote(note).subscribe({
      next: async () => {
        this.notes = await this.getNotes()
      },
      error: () => {
        // handle error TODO
      }
    })
  }

  public changeNoteArchiveStateById(noteId: number): void {
    this.notesService.changeNoteArchiveStateById(noteId).subscribe({
      next: () => {
        const note = this.notes.find(note => note.id === noteId)

        if (note) {
          note.archived = !note.archived
        }
      },
      error: () => {
        // handle error TODO
      }
    })
  }

  public async updateFilters(): Promise<void> {
    this.notes = await this.getNotes()
  }

  public async ngOnInit(): Promise<void> {
    this.notes = await this.getNotes()
  }
}
