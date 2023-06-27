import {AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef} from '@angular/core';
import {LoggerService} from "../logger.service";

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
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

  constructor(@Optional() private loggerService: LoggerService) {


  }


  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
  }

}
