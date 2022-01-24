import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../core/note";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;
  @Input() visibility?: boolean;


  //direction to matTooltip (button's information)
  position = new FormControl('below');

  constructor() { }

  ngOnInit(): void {
  }

  @Output() change = new EventEmitter();

  onClick() {
    this.change.emit(this.note);
  }
}
