import {Component, OnInit} from '@angular/core';
import {PersonalInfoService} from "../../../services/personal-info.service";
import {Observable} from "rxjs";
import {InfoProfile} from "../../../models/InfoProfile";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoProfile: Observable<InfoProfile>;


  constructor(private personalInfo: PersonalInfoService) {
    this.infoProfile = personalInfo.infoProfile
  }


  ngOnInit(): void {
  }

  goToEditHome() {
    console.log("Edit this");
  }
}
