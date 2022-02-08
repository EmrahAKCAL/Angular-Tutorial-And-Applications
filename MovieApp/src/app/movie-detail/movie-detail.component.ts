import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail', //başındaki app kısmı silindi.
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
 //localhost:4200/detail/id
  @Input() movie: Movie; //movie değeri(Movie) dışardan(başka component e) geleceği için input decoration eklendi.
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getMovie();
  }
  getMovie(): void{
    const id=+this.route.snapshot.paramMap.get('id'); //route üzerinde id parametresine ulaşmak. string ifadeyi numbere çevirmek için + operatörü eklenildi.
    this.movieService.getMovie(id).subscribe(movie=> this.movie=movie);
  }

}
