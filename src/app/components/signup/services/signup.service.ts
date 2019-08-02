import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _httpClient: HttpClient) { }

  checkExistingUser(emailID, userName) {
    let url = `http://localhost:8150/user/signup/check`; 
    return this._httpClient.post(url,{userEmailID: emailID, userName: userName})
  }

  putNewUser(emailID,userName,password,useDefault) {
    let url = `http://localhost:8150/user/signup`; 
    this._httpClient.post(url, { userEmailID: emailID, userName: userName, userPassword: password, useDefault: useDefault})
  }
}
