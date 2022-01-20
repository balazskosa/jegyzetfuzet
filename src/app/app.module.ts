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
import {DescriptionPipe} from "./pipe/description.pipe";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatTooltipModule} from "@angular/material/tooltip";
import {LabelListComponent} from './label-list/label-list.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {NextPipe} from "./pipe/next.pipe";
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderElementsComponent } from './reminder-list/reminder-elements/reminder-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteEditorComponent,
    NoteSummaryComponent,
    NoteDetailsComponent,
    LoginComponent,
    DescriptionPipe,
    NextPipe,
    LabelListComponent,
    ReminderListComponent,
    ReminderElementsComponent,
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
    MatButtonToggleModule,
    MatRadioModule,
    MatTooltipModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    NotesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
