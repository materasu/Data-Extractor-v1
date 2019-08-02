import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header/services/header.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  public invalidUser: boolean = false;
  public passwordMatch: boolean = false;

  signUpForm = new FormGroup({
    emailID: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    userName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    useDefaultUseCases: new FormControl("", [Validators.required])
  });
  constructor(
    private loginService: LoginService,
    private router: Router,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.loginService.storeCurrentLoggedOnStatus(false);
    this.headerService.storeCurrentNavigatedUrl(this.router.url);
  }

  checkForm() {
    let username = this.signUpForm.value["UserName"]
  }

  get emailID() {
    return this.signUpForm.get("emailID");
  }

  get userName() {
    return this.signUpForm.get("userName");
  }

  get password() {
    return this.signUpForm.get("password");
  }

  get confirmPassword() {
    return this.signUpForm.get("confirmPassword");
  }

  get useDefaultUseCases() {
    return this.signUpForm.get("useDefaultUseCases");
  }
}
