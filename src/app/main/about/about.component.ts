import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  images = [1, 2].map(() => `https://picsum.photos/1200/300?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
