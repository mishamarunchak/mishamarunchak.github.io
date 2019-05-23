import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../mock-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  lists = MenuItems;
  menuItems = MenuItems;
  description: string;
  isPreviewShow: boolean = false;
  
  constructor() {}

  ngOnInit() {
  }

  show(desc: string)  {
    this.description = desc;
    this.isPreviewShow = true;
  }
  
  hide() {
    
      this.description = null;
      this.isPreviewShow = false;

    
    
  }

  

}

