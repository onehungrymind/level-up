import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../common/services/developers.service';
import { Developers } from '../common/developers';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css'],
  providers: [DevelopersService]
})
export class DevelopersComponent implements OnInit {
  developers: Developers[];
  project: any;

  cards = [
    { title: 'Card 1', cols: 1, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 },
    { title: 'Card 5', cols: 1, rows: 1 },
    { title: 'Card 6', cols: 1, rows: 1 },
    { title: 'Card 7', cols: 1, rows: 1 },
    { title: 'Card 8', cols: 1, rows: 1 },
  ];

  constructor(private developersService: DevelopersService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.developersService.getItems()
      .subscribe(developers => {
        this.developers = developers;
        console.log(this.developers);
      });
  }

}
