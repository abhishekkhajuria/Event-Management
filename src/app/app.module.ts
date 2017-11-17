import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {DataService} from './data.service';
import { EventComponent } from './event/event.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes =[
  {
    path:"",
    component:EventComponent
  },
  {
    path:'event/:id',
    component:SingleEventComponent
  },

  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NavbarComponent,
    FooterComponent,
    SingleEventComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
