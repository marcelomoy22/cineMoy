import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesAllComponent } from './movies-all/movies-all.component';


const routes: Routes = [

  {path: 'movies-all', component: MoviesAllComponent},
  {path: 'movies-detail/:id', component: MoviesDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
