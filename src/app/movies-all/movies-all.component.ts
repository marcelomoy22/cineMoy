
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { User } from '../models/user';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies-all',
  templateUrl: './movies-all.component.html',
  styleUrls: ['./movies-all.component.css'],
  providers: [MovieService]
})
export class MoviesAllComponent implements OnInit{

  public title = 'Populares';
  public user: User;
  public identity= true;
  movies: any[] = [];
  showComponent: boolean = true;


  constructor (
    private _MovieService: MovieService
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
  }

  details(mandar: any){
    this.showComponent = false;
  }

}


