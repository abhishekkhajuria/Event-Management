import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  constructor(private dataService:DataService){
  }
  events = [];
  
  ngOnInit(){
      this.dataService.getData().subscribe(responseData => this.events = responseData);
  }
  
}