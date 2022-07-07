import {Injectable} from '@angular/core';
import {Auth, onAuthStateChanged, user, User} from "@angular/fire/auth";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  private readonly _isAuthUser = new BehaviorSubject(false);
  readonly isAuthUser = this._isAuthUser.asObservable();
  readonly currentUser: Observable<User | null>;

  constructor(private auth: Auth) {
    // ? save current user
    this.currentUser = user(auth);
    // ? save the
    onAuthStateChanged(auth, (user) => {
      this._isAuthUser.next(user != null);
    })
  }
}
