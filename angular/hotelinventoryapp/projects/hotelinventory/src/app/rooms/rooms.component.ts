import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Room, RoomList} from "./rooms";

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {

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
    roomsSelected: RoomList;
    constructor() {


    }

    ngOnInit(): void {
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
        this.roomList.push(room);
    }

}
