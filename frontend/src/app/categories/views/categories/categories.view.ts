import { Component, OnInit, ViewChild } from '@angular/core'
import { Category } from '../../../shared/models/category.model'
import { ErrorModalComponent } from '../../../shared/components/error-modal/error-modal.component'
import { CreateCategoryModalComponent } from '../../components/create-category-modal/create-category-modal.component'
import { UpdateCategoryModalComponent } from '../../components/update-category-modal/update-category-modal.component'
import { DeleteCategoryModalComponent } from '../../components/delete-category-modal/delete-category-modal.component'
import { CategoriesService } from '../../../shared/services/categories.service'

@Component({
  selector: 'app-views-categories',
  templateUrl: './categories.view.html',
  styleUrl: './categories.view.css'
})
export class CategoriesView implements OnInit {
  public categories: Category[] = []

  @ViewChild(CreateCategoryModalComponent) public createCategoryModalComponent: CreateCategoryModalComponent
  @ViewChild(UpdateCategoryModalComponent) public updateCategoryModalComponent: UpdateCategoryModalComponent
  @ViewChild(DeleteCategoryModalComponent) public deleteCategoryModalComponent: DeleteCategoryModalComponent
  @ViewChild(ErrorModalComponent) public errorModalComponent: ErrorModalComponent

  public constructor(private readonly categoriesService: CategoriesService) {}

  public openCreateCategoryModal(): void {
    this.createCategoryModalComponent.openModal()
  }

  public openUpdateCategoryModal(category: Category): void {
    this.updateCategoryModalComponent.openModal(category)
  }

  public openDeleteCategoryModal(category: Category): void {
    this.deleteCategoryModalComponent.openModal(category)
  }

  public async getCategories(): Promise<void> {
    this.categoriesService.getCategories().subscribe({
      next: (categories: Category[]) => {
        this.categories = categories
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't fetch categories, please try again.")
      }
    })
  }

  public async createCategory(category: Category): Promise<void> {
    this.categoriesService.createCategory(category).subscribe({
      next: () => {
        this.getCategories()
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't create category, please try again.")
      }
    })
  }

  public async updateCategory(data: Category): Promise<void> {
    this.categoriesService.updateCategoryById(data).subscribe({
      next: () => {
        const category = this.categories.find((category: Category) => category.id === data.id)
        if (category) {
          category.name = data.name
        }
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't update category, please try again.")
      }
    })
  }

  public async deleteCategory(categoryId: number): Promise<void> {
    this.categoriesService.deleteCategoryById(categoryId).subscribe({
      next: () => {
        this.categories = this.categories.filter((category: Category) => category.id !== categoryId)
      },
      error: () => {
        this.errorModalComponent.openModal("Couldn't delete category, please try again.")
      }
    })
  }

  public async ngOnInit(): Promise<void> {
    this.getCategories()
  }
}
