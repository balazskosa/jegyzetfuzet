import { Injectable } from '@angular/core';
import {Note} from "../core/note";
import {Observable} from "rxjs";

@Injectable()
export class NotesService {
  notes: Note[] = [
    {
      id: 1,
      title: "note1",
      description: "Description1",

    },
    {
      id: 2,
      title: "note2",
      description: "Description2",
    },
    {
      id: 3,
      title: "note3",
      description: "Description3",
    },
    {
      id: 4,
      title: "note4",
      description: "Description3",
    },
    {
      id: 5,
      title: "note5",
      description: "Description5",
    },
    {
      id: 6,
      title: "note6",
      description: "Description6",
    },
    {
      id: 7,
      title: "note7",
      description: "Description7",
    },
    {
      id: 8,
      title: "note8",
      description: "Description8",
    },
  ]

  private _currentId: number = 100;


  constructor() { }

  async getNotes(): Promise<Note[]> {
    return this.notes;
  }

  async getNote(id: number): Promise<Note | undefined> {
    return this.notes.find(
      (note) => note.id === id
    );
  }

  async createNote(note: Note): Promise<Note> {
    note.id = this._currentId;
    this._currentId ++;
    this.notes.push(note);
    return note;
  }

  async editNote(noteId: number, note: Note): Promise<Note> {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);

    const modifiedNote = {
      ...this.notes[noteIndex],
      ...note,
    };
    this.notes.splice(noteIndex, 1, modifiedNote);
    return modifiedNote;
  }

  async deleteNote(note: Note): Promise<void> {
    const noteIndex = this.notes.findIndex((n) => n.id === note.id);
    if(noteIndex != -1)  this.notes.splice(noteIndex,1);
  }
}
