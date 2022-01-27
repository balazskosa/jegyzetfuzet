import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Date, Importance, Note} from "../core/note";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {NotesService} from "../service/notes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {calcPossibleSecurityContexts} from "@angular/compiler/src/template_parser/binding_parser";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  pageTitle: string = "Create note";
  note?: Note;

  importanceLabel: string[] = [];
  dateLabel: string[] = [];

  dp3: any;
  noteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    importance: [Importance.None, Validators.required],
    date: [Date.None, Validators.required],
  });


  constructor(
    private currentRoute: ActivatedRoute,
    private route: Router,
    private service: NotesService,
    private fb: FormBuilder,
    private auth: AuthService){
    this.setLabels();
  }

  async ngOnInit(): Promise<void> {

    const noteId = this.currentRoute.snapshot.paramMap.get('noteId');
    if (noteId) {
      this.note = await this.service.getNote(parseInt(noteId));

      this.noteForm.setValue({
        title: this.note?.title,
        description: this.note?.description,
        importance: this.note?.importance,
        date: this.note?.date,
      });
      this.pageTitle = "Edit note";

    }

  }

  setLabels() {
    for (let enumName in Importance) {
      this.importanceLabel?.push(enumName.toUpperCase());
    }
    for (let enumName in Date) {
      this.dateLabel?.push(enumName.toUpperCase());
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
    this.note.userid = await this.auth.getUserId();

    if (this.note.id) {
      await this.service.editNote(this.note.id as number, this.note);
    } else {
      await this.service.createNote(this.note);
    }

    console.log(this.note);

    await this.route.navigate(["/notes"]);
  }

}
