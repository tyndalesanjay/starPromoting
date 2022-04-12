import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public dropFeature:boolean;
  public dropModal:boolean;
  
  
  constructor(public dialog: MatDialog) { 
    this.dropFeature = false;
    this.dropModal = false;
  }

  ngOnInit(): void {
  }
  
  toggleFeature() {
    this.dropFeature = !this.dropFeature;

    let featureLnk = document.querySelector('#featureLnk');  
    let menu = document.querySelector('#dropFeature');  
    if (this.dropFeature) {
      document.addEventListener('click', (e) => {
      if(e.target != menu && e.target != featureLnk ) {
          this.dropFeature = false;
      }
    }) 
    } 
  }

  toggleModal() {
    this.dropModal = !this.dropModal;

    let modalLnk = document.querySelector('#modalLnk');  
    let aboutMenu = document.querySelector('#dropModal');  
    if (this.dropModal) {
      document.addEventListener('click', (e) => {
      if(e.target != aboutMenu && e.target != modalLnk ) {
          this.dropModal = false;
      }
    }) 
    } 
  }

}
