import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  private _isMobileSize = new BehaviorSubject<boolean>(true);
  private _widthSize = new BehaviorSubject<number>(600);
  isMobileSize = this._isMobileSize.asObservable();
  constructor() {}

  get widthSize() {
    return this._widthSize.asObservable();
  }


  onResize(newSize: number) {
    this._isMobileSize.next(newSize <= 600);
    this._widthSize.next(newSize);
  }
}
