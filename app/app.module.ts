import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {AboutComponent} from './components/pages/about.component';
import {HomeComponent} from './components/pages/home.component';

@NgModule({
  imports:      [ BrowserModule ],

  declarations: [ AppComponent,
                  NavbarComponent,
                  JumbotronComponent,
                  AboutComponent,
                  HomeComponent
                ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
