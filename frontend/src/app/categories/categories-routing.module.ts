import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CategoriesView } from './views/categories/categories.view'

const routes: Routes = [
  {
    path: '',
    component: CategoriesView
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
