import { Component, OnInit } from '@angular/core';
import {NotesService} from "../service/notes.service";
import {Note} from "../core/note";
import {FormControl} from "@angular/forms";
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  notes: Note[] = [];
  constructor(private service: NotesService) {
  }

  async ngOnInit(): Promise<void> {
    this.notes = await this.service.getNotes();
  }

  async onDelete(note: Note) {
    await this.service.deleteNote(note);
  }
}
