import {Component, OnInit} from '@angular/core';
import {Importance} from "../core/note";


@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css']
})
export class LabelListComponent implements OnInit {

  importanceLabel: string[] = [];
  constructor() {
      this.setImportance();
  }

  ngOnInit(): void {

  }

  setImportance() {

    for (let enumName in Importance) {
      this.importanceLabel?.push(enumName);
    }

  }

}
