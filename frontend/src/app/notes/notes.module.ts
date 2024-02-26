import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotesView } from './views/notes/notes.view'
import { NotesRoutingModule } from './notes-routing.module'
import { NoteComponent } from './components/note/note.component'

@NgModule({
  declarations: [NotesView, NoteComponent],
  imports: [CommonModule, NotesRoutingModule]
})
export class NotesModule {}
