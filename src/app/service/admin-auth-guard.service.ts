import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private route: Router,
              private auth: AuthService) { }

  async canActivate() {
    let admin = await this.auth.isAdmin();
    if(!admin) await this.route.navigate(['/login']);
    return admin;
  }
}
