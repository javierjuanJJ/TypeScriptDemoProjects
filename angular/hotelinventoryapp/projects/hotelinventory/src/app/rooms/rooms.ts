export interface Room {
    availableRooms:number;
    bookedRooms:number;
    totalRooms:number;
}

export interface RoomList {
    rootType:string;
    amneties: string;
    price:number;
    photos:string;
    checkInTime: Date;
    checkOutTime: Date;
}