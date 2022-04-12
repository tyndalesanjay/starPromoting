import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paragraph:string =  `Unlike any advertising agency, The Marketing Company is a brand-marketing firm whose approach
  is more like that of a fully-integrated marketing department. This means not only creating 
  and developing marketing messages to be distributed among all selected media and managing 
  those messages, but also making sure that the messages and promises can be delivered. This 
  means working with management and staff to ensure every detail of “the experience” a client
  or customer may have meets and delivers on any promises made via the creative process.
  It also means being an integral part of the ongoing process, successes and failures, in building 
  and developing a brand that will stand up and last no matter the shifts in the economy or other 
  issues the client may face.`

  clientList1 = [
    {
      image: 'https://media.discordapp.net/attachments/889362805713678407/960960897411604580/graceKennedy.png',
      image1: 'https://media.discordapp.net/attachments/889362805713678407/960961741787914310/unknown.png',
      // image2: 'https://media.discordapp.net/attachments/889362805713678407/960961895790174218/unknown.png',
      // image3: 'https://media.discordapp.net/attachments/889362805713678407/962060328055754822/unknown.png'
    },
    {
      image: 'https://media.discordapp.net/attachments/889362805713678407/960961895790174218/unknown.png',
      image1: 'https://media.discordapp.net/attachments/889362805713678407/962077280102940702/unknown.png'
    },
    {
      image: 'https://media.discordapp.net/attachments/889362805713678407/962076281351073872/unknown.png?width=818&height=632',
      image1: 'https://media.discordapp.net/attachments/889362805713678407/960961472081567754/unknown.png'
    },
    {
      image: 'https://media.discordapp.net/attachments/889362805713678407/962076280633847878/unknown.png?width=1440&height=448',
      image1: 'https://media.discordapp.net/attachments/889362805713678407/962076280986165289/unknown.png?width=1152&height=632'
    }
  ]

}
