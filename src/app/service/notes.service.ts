import { Injectable } from '@angular/core';
import {Note} from "../core/note";

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



  constructor() { }

  async getNotes(): Promise<Note[]> {
    return this.notes;
  }
}
