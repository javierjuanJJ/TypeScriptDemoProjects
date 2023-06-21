import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component, DoCheck,
    EventEmitter,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges, ViewChild
} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {HeaderComponent} from "../header/header.component";

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, OnChanges, DoCheck, AfterViewInit {

    hotelRoom = 'Hilton Hotel';
    numberOfRooms = 10;
    hideRoom = false;

    rooms: Room = {
        availableRooms: 10,
        bookedRooms: 5,
        totalRooms: 20,
    };

    roomList: RoomList[] = [

    ];
    title = 'Room List';

    roomsSelected: RoomList;

    @ViewChild(HeaderComponent, {static: true}) headerComponent: HeaderComponent;
    constructor() {


    }

    ngOnInit(): void {
        console.log(this.headerComponent);
        this.roomList = [{
            rootType: 'string',
            amneties: 'string',
            price: 2,
            photos: 'string',
            checkInTime: new Date('11-Nov-2021'),
            checkOutTime: new Date('11-Nov-2021'),
        },
            {
                rootType: 'string',
                amneties: 'string',
                price: 2,
                photos: 'string',
                checkInTime: new Date('11-Nov-2021'),
                checkOutTime: new Date('11-Nov-2021'),
            },
            {
                rootType: 'string',
                amneties: 'string',
                price: 2,
                photos: 'string',
                checkInTime: new Date('11-Nov-2021'),
                checkOutTime: new Date('11-Nov-2021'),
            },
            {
                rootType: 'string',
                amneties: 'string',
                price: 2,
                photos: 'string',
                checkInTime: new Date('11-Nov-2021'),
                checkOutTime: new Date('11-Nov-2021'),
            },
            {
                rootType: 'string',
                amneties: 'string',
                price: 2,
                photos: 'string',
                checkInTime: new Date('11-Nov-2021'),
                checkOutTime: new Date('11-Nov-2021'),
            },
            {
                rootType: 'string',
                amneties: 'string',
                price: 2,
                photos: 'string',
                checkInTime: new Date('11-Nov-2021'),
                checkOutTime: new Date('11-Nov-2021'),
            },
            {
                rootType: 'string',
                amneties: 'string',
                price: 2,
                photos: 'string',
                checkInTime: new Date('11-Nov-2021'),
                checkOutTime: new Date('11-Nov-2021'),
            }];
    }

    toogle() {
        this.hideRoom = !this.hideRoom;
    }

    selectRoom(room: RoomList){
        console.log(room);
        this.roomsSelected = room;
        this.title = 'Room List';
    }

    addRoom(){
        console.log(room);
        const room: RoomList = {
            rootType: 'string',
            amneties: 'string',
            price: 2,
            photos: 'string',
            checkInTime: new Date('11-Nov-2021'),
            checkOutTime: new Date('11-Nov-2021'),
        };
        // this.roomList.push(room);
        this.roomList = [...this.roomList, room];
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if (changes['title']){
            this.title = changes['title'].currentValue.toUpperCase();
        }
    }

    ngDoCheck(): void {
        console.log("on check is called");
    }

    ngAfterViewInit(): void {
        console.log(this.headerComponent);
    }

}
