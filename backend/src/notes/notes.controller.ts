import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { NotesService } from './notes.service'
import { CreateNoteDto, UpdateNoteDto } from 'src/shared/dto/notes.dto'

@Controller('api/notes')
export class NotesController {
  public constructor(private readonly notesService: NotesService) {}

  @Get()
  public getNotes(@Query('archived') archived: string) {
    if (archived === 'true') {
      return this.notesService.getArchivedNotes()
    }

    return this.notesService.getActiveNotes()
  }

  @Get(':id')
  public getNoteById(@Param('id') id: number) {
    id = Number(id)
    return this.notesService.getNoteById(id)
  }

  @Post()
  public createNote(@Body() note: CreateNoteDto) {
    this.notesService.createNote({
      id: 0,
      created_at: new Date(),
      updated_at: new Date(),
      title: note.title,
      content: note.content,
      archived: false
    })
  }

  @Put(':id')
  public updateNoteById(@Param('id') id: number, @Body() note: UpdateNoteDto) {
    id = Number(id)
    this.notesService.updateNoteById(id, {
      id,
      title: note.title,
      content: note.content,
      created_at: new Date(),
      updated_at: new Date(),
      archived: false
    })
  }

  @Delete(':id')
  public deleteNoteById(@Param('id') id: number) {
    id = Number(id)
    this.notesService.deleteNoteById(id)
  }

  @Put(':id/archive')
  public changeNoteArchiveStateById(@Param('id') id: number) {
    id = Number(id)
    this.notesService.changeNoteArchiveStateById(id)
  }
}
