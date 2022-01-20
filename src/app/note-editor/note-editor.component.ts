import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Importance, Note} from "../core/note";
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

  importanceDegree: string[] = [];

  noteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    importance: [Importance.None, Validators.required],
  });


  constructor(
    private currentRoute: ActivatedRoute,
    private route: Router,
    private service: NotesService,
    private fb: FormBuilder)
  {
        this.setImportance();
  }

  async ngOnInit(): Promise<void> {


    const noteId = this.currentRoute.snapshot.paramMap.get('noteId');
    if (noteId) {
      this.note = await this.service.getNote(parseInt(noteId));
      let howImportant: string = "";
      if (this.note?.importance) howImportant = this.note.importance;
      this.noteForm.setValue({
        title: this.note?.title,
        description: this.note?.description,
        importance: howImportant
      });
      this.pageTitle = "Edit note";

      console.log(this.note);

    }

  }

  setImportance() {

    for (let enumName in Importance) {
      this.importanceDegree?.push(enumName.toUpperCase());
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
    this.note = <Note>{...this.note, ...this.noteForm.value};

    if (this.note.id) {
      await this.service.editNote(this.note.id as number, this.note);
    } else {
      await this.service.createNote(this.note);
    }

    console.log(this.note);

    await this.route.navigate(["/notes"]);
  }

}
