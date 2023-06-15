import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hellow World inline</h1> <p>Angular is Awesome</p>',
  styleUrls: ['./app.component.css'],
  styles: [`h1 {color: red;}`]
})
export class AppComponent {
  title = 'hotelinventory';
  loginType = "Admin";
}
