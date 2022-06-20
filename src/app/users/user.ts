export interface User {
  id: string;
  rfid_uid: string;
  firstName: string,
  lastName: string;
  checkIn: any;
  checkOut: any;
  attendant: boolean;
}
