import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteListComponent} from "./note-list/note-list.component";
import {NoteEditorComponent} from "./note-editor/note-editor.component";
import {NoteDetailsComponent} from "./note-details/note-details.component";
import {LoginComponent} from "./login/login.component";
import {LabelListComponent} from "./login/label-list/label-list.component";

const routes: Routes = [
  {path: 'notes', component: NoteListComponent},
  {path: 'notes/:howImportant', component: NoteListComponent},
  {path: 'labels', component: LabelListComponent},
  {path: 'note/:noteId', component: NoteDetailsComponent},
  {path: 'note-editor/:noteId', component: NoteEditorComponent},
  {path: 'note-editor', component: NoteEditorComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
