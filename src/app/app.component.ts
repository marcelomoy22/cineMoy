import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { MoviesPopularComponent } from './movies-popular/movies-popular.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public title = 'CineMoy';
  public user: User;
  public identity= true;
  public mandar= false

  constructor (
    private router: Router,
    // private moviesPopularComponent: MoviesPopularComponent

  ){
    this.user= new User('','','','','','')
  }

  ngOnInit(){
    const currentUrl = this.router.url;

    console.log("se ejecutaaa")

    if(currentUrl != '/'){
      this.eject()
    }

  }

  eject(): void{
    this.mandar= true
    console.log(this.mandar)
    // this.moviesPopularComponent.details(mandar);

  }


}
