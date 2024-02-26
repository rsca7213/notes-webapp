import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CategoriesRoutingModule } from './categories-routing.module'
import { CategoriesView } from './views/categories/categories.view'
import { CategoryComponent } from './components/category/category.component'
import { CreateCategoryModalComponent } from './components/create-category-modal/create-category-modal.component'
import { UpdateCategoryModalComponent } from './components/update-category-modal/update-category-modal.component'
import { DeleteCategoryModalComponent } from './components/delete-category-modal/delete-category-modal.component'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    CategoriesView,
    CategoryComponent,
    CreateCategoryModalComponent,
    UpdateCategoryModalComponent,
    DeleteCategoryModalComponent
  ],
  imports: [CommonModule, CategoriesRoutingModule, ReactiveFormsModule, SharedModule]
})
export class CategoriesModule {}
