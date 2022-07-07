import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ResizeService} from "../../../services/resize/resize.service";

@Component({
  selector: 'app-image-contact',
  templateUrl: './image-contact.component.html',
  styleUrls: ['./image-contact.component.css']
})
export class ImageContactComponent implements OnInit {

  isMobile :Observable<boolean>;

  constructor(resizeService:ResizeService) {
    this.isMobile=resizeService.isMobileSize
  }

  ngOnInit(): void {
  }

}
