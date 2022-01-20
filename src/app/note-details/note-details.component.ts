import {Component, OnInit} from '@angular/core';
import {Note} from "../core/note";
import {NotesService} from "../service/notes.service";
import {ActivatedRoute} from "@angular/router";
import {TooltipPosition} from "@angular/material/tooltip";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note?: Note;
  position = new FormControl('below');

  constructor(private service: NotesService,
              private route: ActivatedRoute,
              ) {}

  async ngOnInit(): Promise<void> {
    const noteId = this.route.snapshot.paramMap.get('noteId');
    if (noteId) {
      this.note = await this.service.getNote(parseInt(noteId));
    }
  }
}
