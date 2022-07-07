import {Component, OnInit} from '@angular/core';
import {NavigatorSection} from "./services/navSections/models/NavigatorSection";
import {NavigatorService} from "./services/navSections/navigator.service";
import {ResizeService} from "./services/resize/resize.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'NullSiteWeb';
  navigatorSection: NavigatorSection;
  currentIdSection: string = "";
  listIdsSections: string[];
  isMobile: boolean = false;

  constructor(private navigatorServices: NavigatorService, private resizeService: ResizeService) {
    this.navigatorSection = navigatorServices.navigatorSections;
    this.listIdsSections = navigatorServices.listIdsSections;
    navigatorServices.currentSection.subscribe((section) => {
      this.currentIdSection = section;
    })
    resizeService.isMobileSize.subscribe((isMobile) => {
      this.isMobile = isMobile;
    })
  }

  ngOnInit(): void {
    this.resizeService.onResize(window.innerWidth);
  }

  onResize(event: any) {
    this.resizeService.onResize(event.target.innerWidth);
    const listClipRects = this.listIdsSections.map(element =>
      [element, document.getElementById(element)?.getBoundingClientRect()])

    // * iterator in this list and calculate if at least half of the component is displayed


    listClipRects.forEach((rect) => {
      const idElement = rect[0] as string
      const position = rect[1] as DOMRect

      // ! change the current id selection when show the middle
      if (position != null && position.top < position.height / 2 && position.bottom > position.height / 2) {

        if (this.currentIdSection != idElement) {
          document.getElementById(this.currentIdSection)?.scrollIntoView()
        }
      }
    })
  }

  onScroll() {


    // * create a new list with the id of the section and one rectangle that contains the same section
    const listClipRects = this.listIdsSections.map(element =>
      [element, document.getElementById(element)?.getBoundingClientRect()])

    // * iterator in this list and calculate if at least half of the component is displayed

    listClipRects.forEach((rect) => {
      const idElement = rect[0] as string
      const position = rect[1] as DOMRect

      // ! change the current id selection when show the middle
      if (position != null && position.top < position.height / 2 && position.bottom > position.height / 2) {
        if (idElement != this.currentIdSection) {
          this.navigatorServices.changeCurrentSection(idElement)
        }
      }
    })
  }
}
