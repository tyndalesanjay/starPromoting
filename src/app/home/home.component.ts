import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public heading:string = 'Helping your business to fly high';

  constructor() { }

  ngOnInit(): void {
  }

  serviceList = [
    {
      title: 'What we do',
      info: 'Our advertising agency approach is more like that of a fully-integrated marketing department. Get a free consultation with a marketing expert to discover opportunities for you.'
    },
    {
      title: 'Digital Advertising',
      info: 'Looking for someone to help you with your ads? We are proficient in SEM, SMM, any kind of display and mobile advertising. Contact us now!'
    },
    {
      title: 'Team Management',
      info: 'We will help you to build an authentic community among your customers, employees, and partners through various types of interaction.'
    },
    {
      title: 'Training and Consulting',
      info: 'We are proficient in coaching and consulting. Our team provide best learning and development solutions to companies and organizations.'
    },
    {
      title: 'Full Funnel Build',
      info: 'We will build a well designed and properly executed sales funnel, which help your business to convert leads into paying customers faster and easier.'
    },
    {
      title: 'Marketing Strategy',
      info: 'Our team knows everything about reaching prospective consumers and turning them into customers of the services your business provides.'
    }
  ]

  clientList = [
    {
      img : 'https://media.discordapp.net/attachments/889362805713678407/960961472081567754/unknown.png'
    },
    {
      img : 'https://media.discordapp.net/attachments/889362805713678407/960961741787914310/unknown.png'
    },
    {
      img : 'https://media.discordapp.net/attachments/889362805713678407/960961895790174218/unknown.png'
    }
  ]
  

}
