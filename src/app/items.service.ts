import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  listItems: Array <{name: string; message: string}> = []

  constructor() { }
}

