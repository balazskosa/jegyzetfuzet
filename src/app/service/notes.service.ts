import { Injectable } from '@angular/core';
import {Note} from "../core/note";

@Injectable()
export class NotesService {
  notes: Note[] = [
    {
      title: "note1",
      description: "Description1",

    },
    {
      title: "note2",
      description: "Description2",
    },
    {
      title: "note3",
      description: "Description3",
    },
  ]



  constructor() { }

  async getNotes(): Promise<Note[]> {
    return this.notes;
  }
}
