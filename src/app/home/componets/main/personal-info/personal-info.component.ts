import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {InfoProfile} from "../../../models/InfoProfile";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input() infoProfile: Observable<InfoProfile> | undefined

  constructor() {
  }

  ngOnInit(): void {
  }

}
