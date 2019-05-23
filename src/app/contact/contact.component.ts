import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  
})


export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private itemsService: ItemsService,
    
  ) {

    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    })

   }
   
  ngOnInit() {       
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    
    this.success = true;

    if (this.success = true){
   
    console.log(this.messageForm.value) 

    this.itemsService.listItems.push({
       name: this.messageForm.value.name,
       message: this.messageForm.value.message,
     })
     this.messageForm.reset()
  }
 }
 

}


