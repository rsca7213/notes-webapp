import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Note } from '../../../shared/models/note.model'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-components-notes-update-note-modal',
  templateUrl: './update-note-modal.component.html',
  styleUrl: './update-note-modal.component.css'
})
export class UpdateNoteModalComponent {
  @ViewChild('modal') private modalRef: ElementRef
  private modal: NgbModalRef

  public note: Note

  @Output() public noteUpdated: EventEmitter<Note> = new EventEmitter<Note>()

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [Validators.required])
  })

  public formErrors = {
    title: '',
    content: ''
  }

  public constructor(private readonly modalService: NgbModal) {}

  public closeModal(): void {
    this.modal.close()
    this.form.reset()
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
      archived: this.note.archived
    }

    this.noteUpdated.emit(note)

    this.closeModal()
  }

  public openModal(note: Note): void {
    this.note = note

    this.form.get('title')?.setValue(note.title)
    this.form.get('content')?.setValue(note.content)

    this.modal = this.modalService.open(this.modalRef, {
      centered: true
    })
  }
}
