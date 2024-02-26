import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Note } from '../../../shared/models/note.model'

@Component({
  selector: 'app-components-notes-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() public note: Note

  @Output() public noteDeleteRequested: EventEmitter<Note> = new EventEmitter<Note>()
  @Output() public noteUpdateRequested: EventEmitter<Note> = new EventEmitter<Note>()
  @Output() public noteArchiveStateChangeRequested: EventEmitter<number> = new EventEmitter<number>()

  public deleteNote(): void {
    this.noteDeleteRequested.emit(this.note)
  }

  public updateNote(): void {
    this.noteUpdateRequested.emit(this.note)
  }

  public changeNoteArchiveState(): void {
    this.noteArchiveStateChangeRequested.emit(this.note.id)
  }
}
