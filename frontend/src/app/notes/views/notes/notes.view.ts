import { Component, OnInit, ViewChild } from '@angular/core'
import { NotesService } from '../../../shared/services/notes.service'
import { Note } from '../../../shared/models/note.model'
import { CreateNoteModalComponent } from '../../components/create-note-modal/create-note-modal.component'
import { UpdateNoteModalComponent } from '../../components/update-note-modal/update-note-modal.component'
import { DeleteNoteModalComponent } from '../../components/delete-note-modal/delete-note-modal.component'
import { lastValueFrom } from 'rxjs'
import { ErrorModalComponent } from '../../../shared/components/error-modal/error-modal.component'
import { CategoriesService } from '../../../shared/services/categories.service'
import { Category } from '../../../shared/models/category.model'

@Component({
  selector: 'app-views-notes',
  templateUrl: './notes.view.html',
  styleUrl: './notes.view.css'
})
export class NotesView implements OnInit {
  public notes: Note[]
  public categories: Category[] = []

  public filters = {
    notes: 'Active' as 'All' | 'Active' | 'Archived',
    category: 'All' as 'All' | 'No category' | number
  }

  @ViewChild(CreateNoteModalComponent) public createNoteModalComponent: CreateNoteModalComponent
  @ViewChild(UpdateNoteModalComponent) public updateNoteModalComponent: UpdateNoteModalComponent
  @ViewChild(DeleteNoteModalComponent) public deleteNoteModalComponent: DeleteNoteModalComponent
  @ViewChild(ErrorModalComponent) public errorModalComponent: ErrorModalComponent

  public constructor(
    private readonly notesService: NotesService,
    private readonly categoriesService: CategoriesService
  ) {}

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
      this.errorModalComponent.openModal("Couldn't fetch notes, please try again.")
      return []
    }
  }

  public deleteNoteById(noteId: number): void {
    this.notesService.deleteNoteById(noteId).subscribe({
      next: () => {
        this.notes = this.notes.filter(note => note.id !== noteId)
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't delete note, please try again.")
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
          note.categories = data.categories
        }
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't update note, please try again.")
      }
    })
  }

  public createNote(note: Note): void {
    this.notesService.createNote(note).subscribe({
      next: async () => {
        this.notes = await this.getNotes()
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't create note, please try again.")
      }
    })
  }

  public changeNoteArchiveStateById(noteId: number): void {
    this.notesService.changeNoteArchiveStateById(noteId).subscribe({
      next: async () => {
        const note = this.notes.find(note => note.id === noteId)

        if (note) {
          note.archived = !note.archived
          await this.updateFilters()
        }
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't update note, please try again.")
      }
    })
  }

  public async getCategories(): Promise<void> {
    this.categoriesService.getCategories().subscribe({
      next: categories => {
        this.categories = categories
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't fetch categories, please try again.")
      }
    })
  }

  public async updateFilters(): Promise<void> {
    this.notes = await this.getNotes()

    switch (this.filters.category) {
      case 'All':
        break
      case 'No category':
        this.notes = this.notes.filter(note => note.categories.length === 0)
        break
      default:
        this.notes = this.notes.filter(note =>
          note.categories.some(category => category.id === Number(this.filters.category))
        )
        break
    }
  }

  public async ngOnInit(): Promise<void> {
    this.notes = await this.getNotes()
    this.getCategories()
  }
}
