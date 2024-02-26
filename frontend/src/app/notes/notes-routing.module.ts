import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotesView } from './views/notes/notes.view'

const routes: Routes = [
  {
    path: '',
    component: NotesView
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
