import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';
  times:any[]=['M1','M2','M3'];
  isActive=false;
  getEvent(){
    console.log('EVENT CAPTURED IN APPCOMPONENT!');
    this.isActive=!this.isActive;
  }
}
