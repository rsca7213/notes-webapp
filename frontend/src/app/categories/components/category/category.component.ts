import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Category } from '../../../shared/models/category.model'

@Component({
  selector: 'app-components-categories-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() public category: Category

  @Output() public categoryDeleteRequested: EventEmitter<Category> = new EventEmitter<Category>()
  @Output() public categoryUpdateRequested: EventEmitter<Category> = new EventEmitter<Category>()

  public deleteCategory(): void {
    this.categoryDeleteRequested.emit(this.category)
  }

  public updateCategory(): void {
    this.categoryUpdateRequested.emit(this.category)
  }
}
