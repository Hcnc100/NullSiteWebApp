import { Component, OnInit } from '@angular/core';
import {faPen} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {

  iconButton = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
