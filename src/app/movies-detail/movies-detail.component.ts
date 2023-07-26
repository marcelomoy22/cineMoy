import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css'],
  providers: [MovieService]
})
export class MoviesDetailComponent implements OnInit{
  public ruta='';
  movie: any;


  constructor(
    private route: ActivatedRoute,
    private _MovieService: MovieService


){
    this.route.params.subscribe(params=>{
        this.ruta = params['id']
    })

}

  ngOnInit(){
    this._MovieService.getOneMovies(this.ruta).subscribe(
      (data: any) => {
        this.movie= data
        console.log(data)
      },
      (error) => {
        console.log(error);
      }
    );

  }


}
