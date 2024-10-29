import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
_message="Hello World!!"
  constructor() { }
  
  getmessage() {
    return this._message;
  }
}
