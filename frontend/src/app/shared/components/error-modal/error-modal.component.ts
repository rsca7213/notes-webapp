import { Component, ElementRef, ViewChild } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-components-shared-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})
export class ErrorModalComponent {
  @ViewChild('modal') private modalRef: ElementRef
  private modal: NgbModalRef

  public message: string

  public constructor(private readonly modalService: NgbModal) {}

  public closeModal(): void {
    this.modal.close()
  }

  public openModal(message: string): void {
    this.message = message
    this.modal = this.modalService.open(this.modalRef, {
      centered: true
    })
  }
}
