import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Note} from "../core/note";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {NotesService} from "../service/notes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  pageTitle: string = "Create note";
  note?: Note;

  noteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });


  constructor(
    private currentRoute: ActivatedRoute,
    private route:Router,
    private service: NotesService,
    private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    const noteId = this.currentRoute.snapshot.paramMap.get('noteId');
    if (noteId) {
      this.note = await this.service.getNote(parseInt(noteId));
      this.noteForm.setValue({title: this.note?.title, description: this.note?.description});
      this.pageTitle = "Edit note";
    }
  }

  get title(): FormControl {
    return this.noteForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.noteForm.get('description') as FormControl;
  }

  async submit() {
    if (!this.noteForm.valid) {
      return;
    }
    this.note = <Note> {...this.note, ...this.noteForm.value };

    if(this.note.id) {
      console.log(this.note);
      await this.service.editNote(this.note.id as number, this.note);
    } else {
      await this.service.createNote(this.note);
    }

    await this.route.navigate(["/notes"]);
  }

}
