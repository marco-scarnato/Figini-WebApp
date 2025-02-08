import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-treatments',
  templateUrl: './intro-treatments.component.html',
  styleUrls: ['./intro-treatments.component.css']
})
export class IntroTreatmentsComponent {
  nameLink: string = "Scoprili Tutti"
  buttonName1 : string = "Chirurgia Orale"
  buttonName2 : string = "Implantologia"
  buttonName3 : string = "Endodonzia e Odontoiatria Conservativa"
}
