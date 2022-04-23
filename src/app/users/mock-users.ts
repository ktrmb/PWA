import {User} from "./user";


export const USERS: User[] = [
  {
    id: "12345",
    firstName: "Katrin",
    lastName: "Tramberger",
    checkIn: new Date(Date.now()),
    checkOut: undefined,
    attendant: true
  },
  {
    id: "23453",
    firstName: "Daniel",
    lastName: "Hochgatterer",
    checkIn: new Date(Date.now()),
    checkOut: new Date(Date.now()),
    attendant: false
  }


]
