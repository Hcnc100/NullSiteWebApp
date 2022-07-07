import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {NavigatorSection} from "./models/NavigatorSection";

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  navigatorSections: NavigatorSection = {
    homeId: 'home',
    skillsId: 'skills',
    projectId: 'project',
    contactId: 'contact'
  }
  private readonly _currentSection = new BehaviorSubject<string>(this.navigatorSections.homeId);

  constructor() {
  }
  get currentSection(){
    return this._currentSection.asObservable();
  }

  get listIdsSections():string[]{
    return Object.values(this.navigatorSections);
  }

  changeCurrentSection(sectionId:string){
    this._currentSection.next(sectionId);
  }
}
