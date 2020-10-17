import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  styles: [':host {width: 100%}'],
})
export class HomeComponent implements OnInit {
  clickCounter = 0;
  name = '';

  constructor() {}

  ngOnInit(): void {}

  countClick(): void {
    this.clickCounter += 1;
  }

  minusClick(): void {
    this.clickCounter -= 1;
  }
}