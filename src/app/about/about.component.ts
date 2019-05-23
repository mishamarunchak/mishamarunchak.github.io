import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  get feedbacks(){
    return this.itemsService.listItems
  }

  ngOnInit() {
  }

}
