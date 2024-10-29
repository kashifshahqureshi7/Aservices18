import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-commp1',
  standalone: true,
  imports: [],
  templateUrl: './commp1.component.html',
  styleUrl: './commp1.component.css'
})

export class Commp1Component {
  list1: number[] = [];
  constructor(private _numlistService: NumlistService) {
    this.list1 = _numlistService.getlist();
  }
  addnumber(val:any) {
    this._numlistService.addnum(val);
    this.list1 = this._numlistService.getlist();
}
}
