import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {

  constructor(private dataService:DataService,private route: ActivatedRoute) { 

  }

  singleEvent=[];

  ngOnInit() {
    let param1 = this.route.snapshot.params;
    let id:number = param1.id;
    this.dataService.getSingleEvent(id).subscribe(responseData => this.singleEvent = responseData);
  }

}
