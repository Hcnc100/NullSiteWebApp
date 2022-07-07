import {Component, OnInit} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {NavigatorService} from "../../../services/navSections/navigator.service";
import {Observable} from "rxjs";
import {ResizeService} from 'src/app/services/resize/resize.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  iconMenu = faBars;
  currentIdSection: Observable<string>;
  isMobile: boolean=false;
  isGoneMenu = true;
  listIdsSections: string[] = [];


  constructor(private navigatorServices: NavigatorService, resizeService: ResizeService) {
    // * the first section always is the home
    this.listIdsSections = navigatorServices.listIdsSections;
    this.currentIdSection = navigatorServices.currentSection;
    resizeService.isMobileSize.subscribe((isMenuMobile) => {
      if (!isMenuMobile && !this.isGoneMenu) this.isGoneMenu = true;
      this.isMobile = isMenuMobile;
    })
  }


  ngOnInit(): void {
  }


  onClickMobile() {
    // * toggle menu mobile
    this.isGoneMenu = !this.isGoneMenu
  }


  scrollToSection(idSelection: string) {
    if (this.isMobile){
      this.navigatorServices.changeCurrentSection(idSelection);
    }else{
      document.getElementById(idSelection)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
    if (!this.isGoneMenu) this.isGoneMenu = true;
  }

}
