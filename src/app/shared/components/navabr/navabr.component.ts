import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrls: ['./navabr.component.scss']
})
export class NavabrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavbarToggle(eve : HTMLDivElement,btn : HTMLButtonElement,crossBtn : HTMLDivElement){
    eve.classList.toggle("collapse");
    btn.classList.toggle("toggler-navbar");
    crossBtn.classList.toggle("d-none");
  }

}
