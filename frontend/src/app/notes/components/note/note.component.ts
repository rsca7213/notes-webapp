import { Component, Input } from '@angular/core'
import { Note } from '../../../shared/models/note.model'

@Component({
  selector: 'app-components-notes-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() public note: Note
}
