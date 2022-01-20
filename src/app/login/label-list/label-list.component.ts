import {Component, OnInit} from '@angular/core';
import {Importance} from "../../core/note";


@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css']
})
export class LabelListComponent implements OnInit {

  importanceDegree: string[] = [];
  show?: boolean = false;
  constructor() {
      this.setImportance();
  }

  ngOnInit(): void {

  }

  setImportance() {

    for (let enumName in Importance) {
      this.importanceDegree?.push(enumName);
    }

  }

  setShow() {
    this.show = !this.show;
  }

}
