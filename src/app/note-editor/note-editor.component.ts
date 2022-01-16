import { Component, OnInit } from '@angular/core';
import {Note} from "../core/note";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  pageTitle: string = "Edit note";

  noteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get title(): FormControl {
    return this.noteForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.noteForm.get('description') as FormControl;
  }

  submit() {
    this.noteForm.value;
    if (!this.noteForm.valid) {
      return;
    }

  }

}
