import {Component, OnInit} from '@angular/core';
import {Date} from "../core/note";

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  dateLabel: string[] = [];

  constructor() {
    this.setDateLabel();
  }

  ngOnInit(): void {
  }

  setDateLabel() {

    for (let enumName in Date) {
      this.dateLabel?.push(enumName);
    }

  }
}
