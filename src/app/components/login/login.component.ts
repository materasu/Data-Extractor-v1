import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/services/header.service';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { fromEventPattern } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public WrongCredentials: boolean = false;
  loginForm = new FormGroup(
    {
      "Email ID": new FormControl(''),
      "Password": new FormControl('')
    }
  )

  constructor(private loginService: LoginService, private headerService: HeaderService, private router: Router) { }

  ngOnInit() {
    this.loginService.storeCurrentLoggedOnStatus(false);
    this.headerService.storeCurrentNavigatedUrl(this.router.url);
  }

    
  checkForm() {
    
      let emailID = this.loginForm.value["Email ID"];
      let password = this.loginForm.value["Password"];

      this.loginService.getPassword(emailID,password).
      subscribe((res) => {
        this.WrongCredentials = !(res["answer"])
        console.log(this.WrongCredentials);
        if (!(this.WrongCredentials)) {
          this.loginService.storeCurrentLoggedOnStatus(true);
          this.navigateToHome()
        }
      });
  }
  navigateToHome() {
    this.router.navigate(["home"])
  }

  navigateNewUser() {
    this.router.navigate(["signup"])
  }
}
