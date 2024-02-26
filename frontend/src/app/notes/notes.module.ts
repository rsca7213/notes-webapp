import { NgModule } from '@angular/core'
import { NotesView } from './views/notes/notes.view'
import { NotesRoutingModule } from './notes-routing.module'
import { NoteComponent } from './components/note/note.component'
import { CreateNoteModalComponent } from './components/create-note-modal/create-note-modal.component'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [NotesView, NoteComponent, CreateNoteModalComponent],
  imports: [NotesRoutingModule, CommonModule, ReactiveFormsModule]
})
export class NotesModule {}
