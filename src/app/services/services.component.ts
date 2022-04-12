import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  serviceList = [
    {
      title: 'Marketing Strategy',
      info: "We provide branding from the inside-out, so when it comes to creating a logo or other elements, we've got you covered.",
      link: 'socialService'
    },
    {
      title: 'DIGITAL & SOCIAL',
      info: 'Effective social media success takes effective planning and creative thinking to drive customers to buy.',
      link: 'socialService'
    },
    {
      title: 'Team Training and Consulting',
      info: 'Our expertise in consulting and training, allows us to be your guide.',
      link: 'socialService'
    },
    {
      title: 'Graphic and Web Design',
      info: 'As a brand marketing firm, helping your company or business stand out among your competition is a must.',
      link: 'socialService'
    },
    {
      title: 'Full Funnel Build',
      info: 'A well designed and properly executed sales funnel helps a business to convert their leads into paying customers.',
      link: 'socialService'
    },
    {
      title: '& MUCH MORE',
      info: 'We also work to write and develop marketing and media plans, effective business plans and much more!',
      link: 'socialService'
    }
  ]

}
