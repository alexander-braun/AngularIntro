import { Component, OnInit } from '@angular/core';

interface MyClasses {
  active: boolean;
  notactive: boolean;
}

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

  setClasses(): MyClasses {
    const myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,
    };

    return myClasses;
  }
}
