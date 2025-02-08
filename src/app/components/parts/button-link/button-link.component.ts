import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {
  @Input() nameButton: string = "Scoprili Tutti";
  hrefButton: string = "";

  constructor() {

  }

  ngOnInit(): void {
    if (this.nameButton == "Scoprili Tutti") {
      this.hrefButton = "/trattamenti"
    } else {
      this.hrefButton = "/studio"
    }
  }
}
