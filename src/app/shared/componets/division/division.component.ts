import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  @Input()divisionImg: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
