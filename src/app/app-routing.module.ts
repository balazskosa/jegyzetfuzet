import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteListComponent} from "./note-list/note-list.component";
import {NoteEditorComponent} from "./note-editor/note-editor.component";
import {NoteDetailsComponent} from "./note-details/note-details.component";
import {LoginComponent} from "./login/login.component";
import {LabelListComponent} from "./label-list/label-list.component";
import {ReminderListComponent} from "./reminder-list/reminder-list.component";
import {AuthGuard} from "./service/auth-guard.service";
import {AdminAuthGuard} from "./service/admin-auth-guard.service";
import {DeleteNoteListComponent} from "./delete-note-list/delete-note-list.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'notes', component: NoteListComponent},

  {path: 'labels', component: LabelListComponent, canActivate: [AuthGuard]},
  {path: 'reminders', component: ReminderListComponent, canActivate: [AuthGuard]},
  {path: 'note/:noteId', component: NoteDetailsComponent, canActivate: [AuthGuard]},
  {path: 'note-editor/:noteId', component: NoteEditorComponent, canActivate: [AuthGuard]},
  {path: 'note-editor', component: NoteEditorComponent},

  {path: 'delete-notes', component: DeleteNoteListComponent, canActivate: [AuthGuard, AdminAuthGuard]},

  {path: '**', redirectTo: "login"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
