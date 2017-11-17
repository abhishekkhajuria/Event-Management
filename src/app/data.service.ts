import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { SingleEventComponent } from './single-event/single-event.component';

@Injectable()
export class DataService {

  constructor(private http:Http) { 

  }
  private url:string = "http://eventmanager-server.herokuapp.com/events";
  private singleurl:string = "http://eventmanager-server.herokuapp.com/events/";
  private event:number;

  getData(){
      return this.http.get(this.url).map((response: Response) => response.json());
  }
  
  getSingleEvent(value:number){
    this.event=value;
    this.singleurl = this.singleurl + this.event;
     return this.http.get(this.singleurl).map((response: Response) => response.json());
  }

}
