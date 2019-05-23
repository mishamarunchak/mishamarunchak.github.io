import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Автомалярна майстерня';

  currentPage: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => this.checkLink())
  }

  checkLink(){
    if(this.router.url.includes('home')) this.currentPage = 'home';
    else if(this.router.url.includes('contact')) this.currentPage = 'contact';
    else if(this.router.url.includes('about')) this.currentPage = 'about';
  }


 
}
