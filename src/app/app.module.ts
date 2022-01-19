import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {NoteListComponent} from './note-list/note-list.component';
import {NoteEditorComponent} from './note-editor/note-editor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {NotesService} from "./service/notes.service";
import {NoteSummaryComponent} from './note-summary/note-summary.component';
import {NoteDetailsComponent} from './note-details/note-details.component';
import {MatDialogModule} from "@angular/material/dialog";
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteEditorComponent,
    NoteSummaryComponent,
    NoteDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    NotesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
