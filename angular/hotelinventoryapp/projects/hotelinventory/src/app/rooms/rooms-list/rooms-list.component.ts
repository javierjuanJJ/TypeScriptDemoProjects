import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomList} from "../rooms";
import {RoomsComponent} from "../rooms.component";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit{

  @Input() rooms: RoomList[] = [];
  @Output()
  public roomsSelected= new EventEmitter<RoomList>();


  selectRoom(room: RoomList){
    this.roomsSelected.emit(room);
  }

  ngOnInit(): void {

  }

}
