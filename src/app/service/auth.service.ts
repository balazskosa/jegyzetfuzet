import {Injectable} from '@angular/core';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Router} from "@angular/router";
import {initializeApp} from "firebase/app";
import {environment} from "../../environments/environment";
import {getDatabase, ref, set, update,} from "firebase/database";
import { User } from "firebase/auth";





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  app;
  db;

  constructor(private route: Router) {
    this.app = initializeApp(environment.firebase);
    this.db = getDatabase();

  }

  async login() {
    await signInWithPopup(getAuth(), new GoogleAuthProvider());
    await this.saveUser(getAuth().currentUser);
    await this.route.navigate(['/notes']);

  }


  async logout() {
    await getAuth().signOut();
    await this.route.navigate(['/login']);
  }

  getUserName(): string | null | undefined {
    return getAuth().currentUser?.displayName;
  }

  hasUser(): boolean {
    return !!(getAuth().currentUser);
  }

  async saveUser(user: User | null) {
    if(!user) return;
    await update(ref(this.db, 'users/' + user.uid), {
      userId: user.uid,
      username: user.displayName,
      email: user.email,
    });
  }

}
