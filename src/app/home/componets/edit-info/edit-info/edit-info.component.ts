import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {





  constructor() {

  }

  ngOnInit(): void {
  }

  clickBack() {
    console.log("Hola")
  }
}
