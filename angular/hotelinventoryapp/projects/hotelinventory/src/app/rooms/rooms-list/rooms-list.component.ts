import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {RoomList} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnDestroy {

  @Input() rooms: RoomList[] = [];
  @Input() title: String = "";
  @Output()
  public roomsSelected= new EventEmitter<RoomList>();


  selectRoom(room: RoomList){
    this.roomsSelected.emit(room);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is called");
  }

}
