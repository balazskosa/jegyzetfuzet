import {Component, Input, OnInit} from '@angular/core';
import {NotesService} from "../../service/notes.service";
import {Date, Note} from "../../core/note";


@Component({
  selector: 'app-reminder-elements',
  templateUrl: './reminder-elements.component.html',
  styleUrls: ['./reminder-elements.component.css']
})
export class ReminderElementsComponent implements OnInit {

  @Input() date = Date.None;
  notes?: Note[];
  constructor(private service: NotesService) { }

  async ngOnInit(): Promise<void> {
    this.notes = await this.service.getNotesByDate(this.date);
  }

}
