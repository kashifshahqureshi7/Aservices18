import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';
import { Commp1Component } from "./commp1/commp1.component";
import { Commp2Component } from "./commp2/commp2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Commp1Component, Commp2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'service';
   _msg!: string;
  constructor(private _messageservice: MessageService)   
  {
    //this._msg = _messageservice.getmessage();
  }
  getmessage() {
    this._msg= this._messageservice.getmessage();
  }
}
