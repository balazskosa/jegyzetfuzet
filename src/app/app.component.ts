import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notebook';

  constructor(private route:Router) {
  }

  async logout() {
    await this.route.navigate(['/login']);
  }
}



