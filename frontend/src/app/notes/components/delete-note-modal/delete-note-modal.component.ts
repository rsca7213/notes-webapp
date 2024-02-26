import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { Note } from '../../../shared/models/note.model'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-components-notes-delete-note-modal',
  templateUrl: './delete-note-modal.component.html',
  styleUrl: './delete-note-modal.component.css'
})
export class DeleteNoteModalComponent {
  public constructor(private readonly modalService: NgbModal) {}

  @Output() public noteDeleted: EventEmitter<number> = new EventEmitter<number>()

  @ViewChild('modal') private modalRef: ElementRef
  private modal: NgbModalRef

  public note: Note

  public deleteNote(): void {
    this.noteDeleted.emit(this.note.id)
    this.modal.close()
  }

  public closeModal(): void {
    this.modal.close()
  }

  public openModal(note: Note): void {
    this.note = note
    this.modal = this.modalService.open(this.modalRef, {
      centered: true
    })
  }
}
