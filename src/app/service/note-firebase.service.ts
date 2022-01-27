import {Injectable, OnInit} from '@angular/core';
import {getDatabase, ref, update, set, remove, get, child} from "firebase/database";
import {Note} from "../core/note";
import {AuthService} from "./auth.service";



@Injectable({
  providedIn: 'root'
})
export class NoteFirebaseService implements OnInit {

  db;
  userId;
  notes: Note[] = [];

  constructor(private auth: AuthService) {
    this.db = getDatabase();
    this.userId = this.auth.getUserId();
  }

  async ngOnInit(): Promise<void> {

  }

  getNotes() {

  }

  async getNote(id: number): Promise<Note | undefined> {
    let userId = await this.auth.getUserId();
    let note;
    let dbRef = ref(this.db);
    await get(child(dbRef, 'notes/' + userId + "/" + id + "/note")).then(
      (snapshot) => {
        note = snapshot.val();
      });
    return note;
  }

  getNotesByImportance() {

  }

  getNotesByDate() {

  }

  async createNote(note: Note) {
    let userId = await this.auth.getUserId();
    let dbRef = ref(this.db, 'notes/' + userId + '/' + note.id);
    await set(dbRef, {
      note: note,
    });

  }

  async editNote(noteId: number, note: Note) {
    let userId = await this.auth.getUserId();
    let dbRef = ref(this.db, 'notes/' + userId + '/' + noteId);
    await update(dbRef, {
      note: note,
    });
  }

  async deleteNote(note: Note) {
    let userId = await this.auth.getUserId();
    let dbRef = ref(this.db, 'notes/' + userId + '/' + note.id);
    await remove(dbRef);
  }


}
