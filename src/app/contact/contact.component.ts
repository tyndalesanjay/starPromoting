import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    fullName: new FormControl(''),
    number: new FormControl(''),
    email: new FormControl(''),
    company: new FormControl(''),
    message: new FormControl(''),
  });

  

  contactType:any = [
    {
      icon:  'fa-regular fa-map',
      type: 'Address',
      info: '123 Kingston, St.Andrew, Jamaica',
    },
    {
      icon: 'fa-solid fa-phone',
      type: 'Phone',
      info: '1 876-111-1111',
      info2: '1 876-111-1111'
    },
    {
      icon: 'fa-solid fa-paper-plane',
      type: 'email',
      info: 'info@gmail.com',
      info2: 'hr@gmail.com'
    },
    {
      icon: 'fa-solid fa-clock',
      type: 'Business Hours',
      info: 'Mon-Fri: 10 am - 6 pm',
      info2: 'Sat-Sun: Closed'
    }
  ] 

  

}
