import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Note } from '../../../shared/models/note.model'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Category } from '../../../shared/models/category.model'

@Component({
  selector: 'app-components-notes-update-note-modal',
  templateUrl: './update-note-modal.component.html',
  styleUrl: './update-note-modal.component.css'
})
export class UpdateNoteModalComponent {
  @ViewChild('modal') private modalRef: ElementRef
  private modal: NgbModalRef

  public note: Note

  @Input() public categories: Category[] = []
  public selectedCategories: Category[] = []

  @Output() public noteUpdated: EventEmitter<Note> = new EventEmitter<Note>()

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [Validators.required]),
    category: new FormControl<number>(0)
  })

  public formErrors = {
    title: '',
    content: ''
  }

  public constructor(private readonly modalService: NgbModal) {}

  public closeModal(): void {
    this.modal.close()
    this.form.reset()
    this.selectedCategories = []
  }

  public validateForm(): boolean {
    if (this.form.get('title')?.invalid) {
      this.formErrors.title = 'Title is required and must be at least 3 characters long'
    }

    if (this.form.get('content')?.invalid) {
      this.formErrors.content = 'Content is required'
    }

    return this.form.valid
  }

  public updateNote(): void {
    if (!this.validateForm()) return

    const note: Note = {
      id: this.note.id,
      title: this.form.get('title')?.value ?? '',
      content: this.form.get('content')?.value ?? '',
      created_at: this.note.created_at,
      updated_at: this.note.updated_at,
      archived: this.note.archived,
      categories: this.selectedCategories
    }

    this.noteUpdated.emit(note)

    this.closeModal()
  }

  public selectCategory(): void {
    const index = this.selectedCategories.findIndex(c => c.id === this.form.get('category')?.value)

    if (index !== -1) {
      return
    } else {
      const category = this.categories.find(c => c.id === this.form.get('category')?.value)
      if (category) this.selectedCategories.push(category)
    }
  }

  public removeCategory(id: number): void {
    this.selectedCategories = this.selectedCategories.filter(c => c.id !== id)
  }

  public openModal(note: Note): void {
    this.note = note

    this.form.get('title')?.setValue(note.title)
    this.form.get('content')?.setValue(note.content)
    this.form.get('category')?.setValue(this.categories[0]?.id || 0)

    this.selectedCategories = note.categories

    this.modal = this.modalService.open(this.modalRef, {
      centered: true
    })
  }
}
