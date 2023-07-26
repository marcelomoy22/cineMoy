import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MoviesPopularComponent } from './movies-popular/movies-popular.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesAllComponent } from './movies-all/movies-all.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MoviesPopularComponent,
    MoviesDetailComponent,
    MoviesAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
