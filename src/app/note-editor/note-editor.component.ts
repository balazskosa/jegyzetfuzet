import { Component, OnInit } from '@angular/core';
import {Note} from "../core/note";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {NotesService} from "../service/notes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  pageTitle: string = "Edit note";
  note?: Note;

  noteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });


  constructor(
    private route:Router,
    private service: NotesService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get title(): FormControl {
    return this.noteForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.noteForm.get('description') as FormControl;
  }

  async submit() {
    if (this.noteForm.valid) {
      this.note = {title: this.noteForm.value.title, description: this.noteForm.value.description};
      await this.service.createNote(this.note);
      await this.route.navigate(["/notes"]);
    }
    return;
  }
}
