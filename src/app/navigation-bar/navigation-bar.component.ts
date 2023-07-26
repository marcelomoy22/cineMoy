import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit{
  public ruta='';
  public mandar= false

  constructor(
    private route: ActivatedRoute,
    private router: Router,

){
    this.route.params.subscribe(params=>{
        this.ruta = params['id']
    })

}

ngOnInit(){
  const currentUrl = this.router.url;

  if(currentUrl != '/'){
    this.eject()
  }

}

eject(): void{
  this.mandar= true
  // this.moviesPopularComponent.details(mandar);

}

  login(){
    Swal.fire({
      title: 'Éxito!',
      text: '¡Aqui voy a poner el logeo con firebase!',
      icon: 'success'
    });
  }

  continuara(){
    Swal.fire({
      title: 'Éxito!',
      text: '¡Continuara..  en cuanto me contraten :D!',
      icon: 'success'
    });
  }

}
