import {Component, OnInit} from '@angular/core';
import {PersonalInfoService} from "../../../services/personal-info.service";
import {SocialLink} from "../../../models/SocialLink";

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  listSocialLink:SocialLink[]

  constructor(personalInfo: PersonalInfoService) {
    this.listSocialLink=personalInfo.listSocialLink
  }

  ngOnInit(): void {
  }

}
