import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeaderService {
  public navigatedUrl = new BehaviorSubject("");

  constructor() {}

  public storeCurrentNavigatedUrl(url) {
    this.navigatedUrl.next(url);
  }
}
