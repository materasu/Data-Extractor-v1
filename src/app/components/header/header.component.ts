import { Component, OnInit } from '@angular/core';
import { HeaderService } from './services/header.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public displayHomeLink: boolean = false;
  public displayLogOutLink: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.navigatedUrl.subscribe((res) => {
      console.log(res);
      if (res !== '/home') {
        this.displayHomeLink = true;
      } else {
        this.displayHomeLink = false;
      }
    });
    this.loginService.loggedOnStatus.subscribe((res) => {
      // console.log(res);
      if(res === null || res === false)
        this.displayLogOutLink = false;
      else
        this.displayLogOutLink = true;
      console.log("Logged In = "+this.displayLogOutLink)
    })
  }

  public navigate(url: string) {
    this.router.navigate([url])
  }

  public navigateToHome() {
    this.router.navigate(["home"])
  }
}
