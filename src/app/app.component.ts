import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notebook';

  open (even: any) {
    console.log("opened");
  }

  close(event: any) {
    console.log("closed");
  }

}



