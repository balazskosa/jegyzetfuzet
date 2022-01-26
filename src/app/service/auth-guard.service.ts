import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private route: Router) {
  }

  async canActivate() {
    let hasUser: boolean = this.auth.hasUser();
    if(!hasUser) await this.route.navigate(['/login']);
    return hasUser;
  }
}
