import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteListComponent} from "./note-list/note-list.component";
import {NoteEditorComponent} from "./note-editor/note-editor.component";

const routes: Routes = [
  {path: 'note-list', component: NoteListComponent},
  {path: 'note-editor', component: NoteEditorComponent},
  {path: '**', redirectTo: "/note-list"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
