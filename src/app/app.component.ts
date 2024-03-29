import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataService:DataService){
  }
  events = [];
  ngOnInit(){
      this.dataService.getData().subscribe(responseData => this.events = responseData);
  }
  
}