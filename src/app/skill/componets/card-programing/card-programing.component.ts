import {Component, Input, OnInit} from '@angular/core';
import {ItemSkill} from "../../models/ItemSkill";

@Component({
  selector: 'app-card-programing',
  templateUrl: './card-programing.component.html',
  styleUrls: ['./card-programing.component.css']
})
export class CardProgramingComponent implements OnInit {
  @Input() itemProgramming: ItemSkill | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
