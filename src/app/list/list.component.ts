import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  breweries: object;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getBeer().subscribe((data) => {
      this.breweries = data;
      console.log(this.breweries);
    });
  }
}
