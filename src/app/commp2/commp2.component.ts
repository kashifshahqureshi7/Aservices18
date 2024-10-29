import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-commp2',
  standalone: true,
  imports: [],
  templateUrl: './commp2.component.html',
  styleUrl: './commp2.component.css'
})
export class Commp2Component {
  list1: number[] = [];
  constructor(private _numlistService: NumlistService) {
    this.list1 = _numlistService.getlist();
  }
  addnumber(val: any) {
    this._numlistService.addnum(val);
    this.list1 = this._numlistService.getlist();
  }
}
