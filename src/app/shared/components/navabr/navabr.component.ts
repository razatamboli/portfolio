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

  onNavbarToggle(navToggle : HTMLDivElement,btn : HTMLButtonElement,crossBtn : HTMLDivElement){
    navToggle.classList.toggle("collapse");
    btn.classList.toggle("toggler-navbar");
    crossBtn.classList.toggle("d-none");
    navToggle.classList.toggle("mb-forMobile")
  }

}
