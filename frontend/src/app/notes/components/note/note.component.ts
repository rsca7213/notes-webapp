import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Note } from '../../../shared/models/note.model'

@Component({
  selector: 'app-components-notes-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() public note: Note

  @Output() public noteDeleteRequested: EventEmitter<number> = new EventEmitter<number>()
  @Output() public noteUpdateRequested: EventEmitter<Note> = new EventEmitter<Note>()

  public deleteNote(): void {
    this.noteDeleteRequested.emit(this.note.id)
  }

  public updateNote(): void {
    this.noteUpdateRequested.emit(this.note)
  }
}
