import {Component, OnInit} from '@angular/core';
import {AuthService} from "./service/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notebook';


  constructor(private auth: AuthService) {
  }

  async logout() {
    await this.auth.logout();
  }

  getUserName(): string | null | undefined{
    return this.auth.getUserName();
  }


}



