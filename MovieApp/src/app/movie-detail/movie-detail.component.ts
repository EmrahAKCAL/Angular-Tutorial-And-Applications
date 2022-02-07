import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'movie-detail', //başındaki app kısmı silindi.
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
 
  @Input() movie: Movie; //movie değeri(Movie) dışardan(başka component e) geleceği için input decoration eklendi.
  constructor() { }

  ngOnInit() {
  }

}
