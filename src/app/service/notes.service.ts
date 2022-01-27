import {Injectable, OnInit} from '@angular/core';
import {Date, Importance, Note} from "../core/note";
import {NoteFirebaseService} from "./note-firebase.service";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class NotesService {
  notes: Note[] = [
    {
      id: 1,
      title: "note1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        " Mauris ultricies imperdiet orci. Mauris auctor tortor id leo mollis lobortis." +
        " Curabitur blandit massa id nulla eleifend, sed iaculis purus commodo. Quisque cursus metus odio," +
        " at pellentesque orci venenatis eget. Vestibulum quis sapien augue. Suspendisse faucibus velit purus," +
        " ut aliquet nulla sodales vitae. Phasellus sit amet elit pulvinar, aliquet libero vitae, mattis mi." +
        " Proin ut tincidunt arcu. Praesent mattis felis id tincidunt posuere. Mauris feugiat tristique ligula" +
        " sit amet maximus. Nam rutrum ultricies mi in sollicitudin. Curabitur id vulputate orci. Sed eu lacus" +
        " sit amet magna ornare mollis. Pellentesque dapibus mattis" +
        " ipsum, sit amet tincidunt risus lobortis ornare. Quisque laoreet tellus eu imperdiet feugiat.",
      importance: Importance.Low,
      date: Date.NextMonth,
      userid: "MkmVCdiX4JhkqncXgYpnktzxpUs2",

    },
    {
      id: 2,
      title: "note2",
      description: "Description2",
      importance: Importance.None,
      date: Date.None,
      userid: "MkmVCdiX4JhkqncXgYpnktzxpUs2",
    },
    {
      id: 3,
      title: "note3",
      description: "Nullam gravida massa id lacus molestie, eu consectetur tellus luctus. Curabitur fringilla" +
        " eu magna at pretium. Pellentesque ac nisl ut dui efficitur ullamcorper. Donec interdum lorem molestie" +
        " sem placerat consectetur. Etiam mattis nunc vitae est luctus pulvinar. Pellentesque tincidunt nec dolor " +
        "eget molestie. Nulla elementum ante porta orci porta, nec feugiat augue hendrerit. Sed dignissim" +
        " turpis eu augue vestibulum, vitae pretium massa varius. Maecenas et dui at magna rhoncus pharetra.",
      importance: Importance.Medium,
      date: Date.None,
      userid: "MkmVCdiX4JhkqncXgYpnktzxpUs2",
    },
    {
      id: 4,
      title: "note4",
      description: "Description3",
      importance: Importance.None,
      date: Date.None,
      userid: "MkmVCdiX4JhkqncXgYpnktzxpUs2",
    },
    {
      id: 5,
      title: "note5",
      description: "Description5",
      importance: Importance.None,
      date: Date.None,
      userid: "MkmVCdiX4JhkqncXgYpnktzxpUs2",
    },
    {
      id: 6,
      title: "note6",
      description: "Description6",
      importance: Importance.None,
      date: Date.NextMonth,
      userid: "MkmVCdiX4JhkqncXgYpnktzxpUs2",
    },
    {
      id: 7,
      title: "note7",
      description: "Description7",
      importance: Importance.None,
      date: Date.Today,
      userid: "MkmVCdiX4JhkqncXgYpnktzxpUs2",
    },

    {
      id: 8,
      title: "note8",
      description: "Description8",
      importance: Importance.None,
      date: Date.Today,
      userid: "MkmVCdiX4JhkqncXgYpnktzxpUs2",
    },
    {
      id: 9,
      title: "note9",
      description: "Description9",
      importance: Importance.None,
      date: Date.Today,
      userid: "dwMaZNCJddPHlXNSX0czB0QxBgp1",
    },

    {
      id: 10,
      title: "note10",
      description: "Description10",
      importance: Importance.None,
      date: Date.Today,
      userid: "dwMaZNCJddPHlXNSX0czB0QxBgp1",
    },
    {
      id: 999,
      title: "Test",
      description: "Test this page before login",
      importance: Importance.High,
      date: Date.Today,
      userid: "anonymous",
    },
    {
      id: 998,
      title: "Test",
      description: "Test this page before login",
      importance: Importance.High,
      date: Date.Today,
      userid: undefined,
    },
  ]

  private _currentId: number = 100;


  constructor(private noteFirebaseService: NoteFirebaseService,
              private auth: AuthService) {
  }


  async getNotes(): Promise<Note[]> {
    let userId = await this.auth.getUserId();
    return this.notes.filter(note => note.userid == userId);
  }

  async getNote(id: number): Promise<Note | undefined> {
    return this.notes.find(
      (note) => note.id === id
    );
  }

  async getNotesByImportance(howImportant: string): Promise<Note[]> {
    let userId = await this.auth.getUserId();
    return this.notes.filter(note => note.importance == howImportant && note.userid == userId);
  }

  async getNotesByDate(date: string): Promise<Note[]> {
    let userId = await this.auth.getUserId();
    return this.notes.filter(note => note.date == date && note.userid == userId);
  }

  async createNote(note: Note): Promise<Note> {
    note.id = this._currentId;
    this._currentId++;
    this.notes.splice(0, 0, note);


    await this.noteFirebaseService.createNote(note);
    return note;
  }

  async editNote(noteId: number, note: Note): Promise<Note> {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);

    const modifiedNote = {
      ...this.notes[noteIndex],
      ...note,
    };
    this.notes.splice(noteIndex, 1, modifiedNote);

    await this.noteFirebaseService.editNote(noteId, note);
    return modifiedNote;
  }

  async deleteNote(note: Note): Promise<void> {
    const noteIndex = this.notes.findIndex((n) => n.id === note.id);
    if (noteIndex != -1) this.notes.splice(noteIndex, 1);

    await this.noteFirebaseService.deleteNote(note);
  }


}
