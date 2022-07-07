import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {InfoProfile} from "../../../models/InfoProfile";

@Component({
  selector: 'app-img-profile',
  templateUrl: './img-profile.component.html',
  styleUrls: ['./img-profile.component.css']
})
export class ImgProfileComponent implements OnInit {

  @Input() infoProfile: Observable<InfoProfile> | undefined
  isLoading= true;

  constructor() {

  }

  ngOnInit(): void {
  }

  changeLoad() {
    setTimeout(() => {
      this.isLoading=false;
    }, 800);
  }
}
