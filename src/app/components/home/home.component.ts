import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/services/header.service';
import { Router } from '@angular/router';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService, private router: Router) {}

  ngOnInit() {
    this.headerService.storeCurrentNavigatedUrl(this.router.url);
  }
}
