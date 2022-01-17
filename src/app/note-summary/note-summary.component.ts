import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../core/note";

@Component({
  selector: 'app-note-summary',
  templateUrl: './note-summary.component.html',
  styleUrls: ['./note-summary.component.css']
})
export class NoteSummaryComponent implements OnInit {

  @Input() note!: Note;

  constructor() {
  }

  ngOnInit(): void {
  }

}
