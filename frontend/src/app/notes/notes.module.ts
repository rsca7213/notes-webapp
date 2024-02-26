import { NgModule } from '@angular/core'
import { NotesView } from './views/notes/notes.view'
import { NotesRoutingModule } from './notes-routing.module'
import { NoteComponent } from './components/note/note.component'
import { CreateNoteModalComponent } from './components/create-note-modal/create-note-modal.component'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateNoteModalComponent } from './components/update-note-modal/update-note-modal.component'

@NgModule({
  declarations: [NotesView, NoteComponent, CreateNoteModalComponent, UpdateNoteModalComponent],
  imports: [NotesRoutingModule, CommonModule, ReactiveFormsModule]
})
export class NotesModule {}
