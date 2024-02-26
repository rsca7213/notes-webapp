import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Note } from '../../../shared/models/note.model'

@Component({
  selector: 'app-components-notes-create-note-modal',
  templateUrl: './create-note-modal.component.html',
  styleUrl: './create-note-modal.component.css'
})
export class CreateNoteModalComponent {
  @ViewChild('modal') private modalRef: ElementRef
  private modal: NgbModalRef

  @Output() public noteCreated: EventEmitter<Note> = new EventEmitter<Note>()

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

  public createNote(): void {
    if (!this.validateForm()) return

    const note: Note = {
      id: 0,
      title: this.form.get('title')?.value ?? '',
      content: this.form.get('content')?.value ?? '',
      created_at: new Date(),
      updated_at: new Date(),
      archived: false
    }

    this.noteCreated.emit(note)

    this.closeModal()
  }

  public openModal(): void {
    this.modal = this.modalService.open(this.modalRef, {
      centered: true
    })
  }
}
