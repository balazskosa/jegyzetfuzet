import {Injectable} from '@angular/core';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Router} from "@angular/router";
import {initializeApp} from "firebase/app";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) {
    initializeApp(environment.firebase);
  }

  async login() {
    await signInWithPopup(getAuth(), new GoogleAuthProvider());
    await this.route.navigate(['/notes']);
  }

  async logout() {
    await getAuth().signOut();
    await this.route.navigate(['/login']);
  }

  getUserName(): string | null | undefined{
    return getAuth().currentUser?.displayName;
  }

  hasUser(): boolean {
    return !!(getAuth().currentUser);
  }
 }
