import { Injectable } from '@angular/core'
import { Note } from '../models/note.model'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public constructor(private readonly httpClient: HttpClient) {}

  public getActiveNotes(): Observable<Note[]> {
    let params = new HttpParams()

    params = params.append('archived', 'false')

    return this.httpClient.get<Note[]>('http://localhost:3000/api/notes', { params })
  }

  public getArchivedNotes(): Observable<Note[]> {
    let params = new HttpParams()

    params = params.append('archived', 'true')

    return this.httpClient.get<Note[]>('http://localhost:3000/api/notes', { params })
  }

  public getNoteById(id: number): Observable<Note> {
    return this.httpClient.get<Note>(`http://localhost:3000/api/notes/${id}`)
  }

  public createNote(note: Note): Observable<void> {
    return this.httpClient.post<void>('http://localhost:3000/api/notes', {
      ...note,
      categories: note.categories.map(category => category.id)
    })
  }

  public updateNote(data: Note): Observable<void> {
    return this.httpClient.put<void>(`http://localhost:3000/api/notes/${data.id}`, {
      ...data,
      categories: data.categories.map(category => category.id)
    })
  }

  public deleteNoteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/api/notes/${id}`)
  }

  public changeNoteArchiveStateById(id: number): Observable<void> {
    return this.httpClient.put<void>(`http://localhost:3000/api/notes/${id}/archive`, {})
  }
}
