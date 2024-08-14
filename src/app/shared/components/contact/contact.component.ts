import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavbarToggle(eve : HTMLDivElement,btn : HTMLButtonElement,crossBtn : HTMLDivElement){
    eve.classList.toggle("collapse");
    btn.classList.toggle("toggler-navbar");
    crossBtn.classList.toggle("d-none");
  }

}
