import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Category } from '../../../shared/models/category.model'

@Component({
  selector: 'app-components-categories-delete-category-modal',
  templateUrl: './delete-category-modal.component.html',
  styleUrl: './delete-category-modal.component.css'
})
export class DeleteCategoryModalComponent {
  public constructor(private readonly modalService: NgbModal) {}

  @Output() public categoryDeleted: EventEmitter<number> = new EventEmitter<number>()

  @ViewChild('modal') private modalRef: ElementRef
  private modal: NgbModalRef

  public category: Category

  public deleteCategory(): void {
    this.categoryDeleted.emit(this.category.id)
    this.modal.close()
  }

  public closeModal(): void {
    this.modal.close()
  }

  public openModal(category: Category): void {
    this.category = category
    this.modal = this.modalService.open(this.modalRef, {
      centered: true
    })
  }
}
