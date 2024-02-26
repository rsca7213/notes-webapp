import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Category } from '../../../shared/models/category.model'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-components-categories-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrl: './create-category-modal.component.css'
})
export class CreateCategoryModalComponent {
  @ViewChild('modal') private modalRef: ElementRef
  private modal: NgbModalRef

  @Output() public categoryCreated: EventEmitter<Category> = new EventEmitter<Category>()

  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  public formErrors = {
    name: ''
  }

  public constructor(private readonly modalService: NgbModal) {}

  public closeModal(): void {
    this.modal.close()
    this.form.reset()
  }

  public validateForm(): boolean {
    if (this.form.get('name')?.invalid) {
      this.formErrors.name = 'Name is required and must be at least 3 characters long'
    }

    return this.form.valid
  }

  public createCategory(): void {
    if (!this.validateForm()) return

    const category: Category = {
      id: 0,
      name: this.form.get('name')?.value ?? ''
    }

    this.categoryCreated.emit(category)

    this.closeModal()
  }

  public openModal(): void {
    this.modal = this.modalService.open(this.modalRef, {
      centered: true
    })
  }
}
