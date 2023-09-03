import { Component, OnInit } from '@angular/core';
import { IReading, READING_LIST } from './reading-data';


@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  public books = READING_LIST;
  public sortedBooks?: IReading[];

  constructor() {}

  ngOnInit(): void {
    this.sortedBooks = this.books.sort((b1, b2) => (b1.when < b2.when) ? 1 : (b1.when > b2.when) ? -1 : 0);
  }
}
