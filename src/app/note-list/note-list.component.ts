import {Component, OnInit} from '@angular/core';
import {NotesService} from "../service/notes.service";
import {Note} from "../core/note";
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  position = new FormControl('below');
  visibility: boolean = true;

  notes: Note[] = [];

  constructor(
    private route: Router,
    private currentRoute: ActivatedRoute,
    private service: NotesService) {
  }

  async ngOnInit(): Promise<void> {
    this.route.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    const howImportant = this.currentRoute.snapshot.paramMap.get('labels');
    const dateLabel = this.currentRoute.snapshot.paramMap.get('reminders');

    if (howImportant) {
      this.notes = await this.service.getNotesByImportance(howImportant.toUpperCase());
      this.visibility = false;
      return;
    }

    if (dateLabel) {
      this.notes = await this.service.getNotesByDate(dateLabel.toUpperCase());
      this.visibility = false;
      return;
    }

    this.notes = await this.service.getNotes();
  }

  async onDelete(note: Note) {
    await this.service.deleteNote(note);
  }

  async navigate() {
    await this.route.navigate(['/', this.currentRoute.snapshot.paramMap.keys[0]]);
  }

}
