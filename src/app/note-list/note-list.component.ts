import { Component, OnInit } from '@angular/core';
import {NotesService} from "../service/notes.service";
import {Note} from "../core/note";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];
  constructor(private service: NotesService) {

  }

  async ngOnInit(): Promise<void> {
    this.notes = await this.service.getNotes();
  }

  log() {
    console.log("clicked");
  }

  async onDelete(note: Note) {
    await this.service.deleteNote(note);
  }
}
