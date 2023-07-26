
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { User } from '../models/user';
import { Movie } from '../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-popular',
  templateUrl: './movies-popular.component.html',
  styleUrls: ['./movies-popular.component.css'],
  providers: [MovieService]

})
export class MoviesPopularComponent implements OnInit{
  public title = 'Populares';
  public user: User;
  public identity= true;
  movies: any[] = [];
  showComponent: boolean = true;
  public mandar= false




  constructor (
    private _MovieService: MovieService,
    private router: Router,

  ){
    this.user= new User('','','','','','')
  }

  ngOnInit(){
    this._MovieService.getMovies().subscribe(
      (data: any) => {
        this.movies= data.results
      },
      (error) => {
        console.log(error);
      }
    );

    const currentUrl = this.router.url;

    if(currentUrl == '/movies-all'){
      this.details("s")
    }

  }

  sortMoviesByPopularity() {
    // Ordena los datos por el campo 'popularity' en orden descendente
    this.movies.sort((a, b) => b.popularity - a.popularity);
  }

  details(mandar: any){
    this.showComponent = false;
  }

}
