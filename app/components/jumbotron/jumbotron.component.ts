import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
  // set the jumbotron heading, text, btn and Url.
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor() {
    this.jbtHeading = "Hello Rod";
    this.jbtText = "This is an Angular 2 App";
    this.jbtBtnText = "Read More";
    this.jbtBtnUrl = "/about";
  }
}
