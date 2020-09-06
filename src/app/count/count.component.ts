import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  id: any; // to clear setInterval 
  constructor( @Inject('days') private days: number) { }

  ngOnInit() { 
    this.id = setInterval(() => {
      --this.days
      if (this.days === 0) {
        clearInterval(this.id)
      }
    }, 1000)
  }

}