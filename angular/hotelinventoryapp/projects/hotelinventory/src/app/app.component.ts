import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hellow World inline</h1> <p>Angular is Awesome</p>',
  styleUrls: ['./app.component.css'],
  styles: [`h1 {color: red;}`]
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'hotelinventory';
  loginType = "Admin";

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
  }

}
