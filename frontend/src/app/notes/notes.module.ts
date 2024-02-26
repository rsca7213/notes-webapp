import { NgModule } from '@angular/core'
import { NotesView } from './views/notes/notes.view'
import { NotesRoutingModule } from './notes-routing.module'
import { NoteComponent } from './components/note/note.component'
import { CreateNoteModalComponent } from './components/create-note-modal/create-note-modal.component'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UpdateNoteModalComponent } from './components/update-note-modal/update-note-modal.component'
import { DeleteNoteModalComponent } from './components/delete-note-modal/delete-note-modal.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    NotesView,
    NoteComponent,
    CreateNoteModalComponent,
    UpdateNoteModalComponent,
    DeleteNoteModalComponent
  ],
  imports: [NotesRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, SharedModule]
})
export class NotesModule {}
