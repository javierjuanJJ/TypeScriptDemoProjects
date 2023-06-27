import {AfterContentInit, Component, ContentChild, Host, OnInit, Self, ViewChild} from '@angular/core';
import {EmployeeComponent} from "../employee/employee.component";
import {RoomsService} from "../rooms/services/rooms.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild(EmployeeComponent) employee !: EmployeeComponent;
  constructor(@Host() private roomService: RoomsService) {


  }
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.employee = "John changed";
  }

  ngOnInit(): void {
  }

}
