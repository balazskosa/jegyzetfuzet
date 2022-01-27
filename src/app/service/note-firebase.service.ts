import {Injectable, OnInit} from '@angular/core';
import {child, get, getDatabase, onValue, push, ref, remove, set, update} from "firebase/database";
import {Date, Importance, Note} from "../core/note";
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

  async getNotes() {
    let userId = await this.auth.getUserId();
    let dbRef = ref(this.db, '/notes/' + userId);
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        // ...
      });
    }, {
      onlyOnce: true
    });
  }

  async getNote(id: number) {
    let userId = await this.auth.getUserId();
    let dbRef = ref(this.db);

    let note: Note;
    await get(child(dbRef, 'notes/' + userId + "/" + id + "/note")).then(
      (snapshot) => {
        const data = snapshot.val();
        note = <Note> {...snapshot.val()};
      });
    //return note;
  }

  getNotesByImportance() {

  }

  getNotesByDate() {

  }

  async createNote(note: Note) {
   ` let userId = await this.auth.getUserId();
    let dbRef = ref(this.db, 'notes/' + userId);
    let newPostRef = push(dbRef);
    await set(newPostRef, {
       note: note,
    });`

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
