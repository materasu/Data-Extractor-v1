import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedOnStatus:Subject<boolean> = new BehaviorSubject<boolean>(null);
  constructor(private _httpClient: HttpClient) { }

  public storeCurrentLoggedOnStatus(status) {
    this.loggedOnStatus.next(status);
  }
  
  public getPassword(emailID,password) {
      let url = `http://localhost:8150/user/login`;
      return this._httpClient.post(url,{userEmailID: emailID, userPassword: password});
  }
}
