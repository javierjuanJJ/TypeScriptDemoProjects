import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  private roomList: ({
    rootType: string;
    checkOutTime: Date;
    amneties: string;
    price: number;
    checkInTime: Date;
    photos: string
  } | { rootType: string; checkOutTime: Date; amneties: string; price: number; checkInTime: Date; photos: string } | {
    rootType: string;
    checkOutTime: Date;
    amneties: string;
    price: number;
    checkInTime: Date;
    photos: string
  } | { rootType: string; checkOutTime: Date; amneties: string; price: number; checkInTime: Date; photos: string } | {
    rootType: string;
    checkOutTime: Date;
    amneties: string;
    price: number;
    checkInTime: Date;
    photos: string
  } | { rootType: string; checkOutTime: Date; amneties: string; price: number; checkInTime: Date; photos: string } | {
    rootType: string;
    checkOutTime: Date;
    amneties: string;
    price: number;
    checkInTime: Date;
    photos: string
  })[];
  roomList = [{
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
  getRooms() {

    return this.roomList;
  }

}
