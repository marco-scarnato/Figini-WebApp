import { Component } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent {
  nameLink: string = "Scoprili Tutti"
  buttonName1 : string = "Igiene e Profilassi"
  buttonName2 : string = "Endodonzia e Odontoiatria Conservativa"
  buttonName3 : string = "Parodontologia"
  buttonName4 : string = "Implantologia"
  buttonName5 : string = "Pedodonzia"
  buttonName6 : string = "Chirurgia Orale"
  buttonName7 : string = "Protesi"
  buttonName8 : string = "Ortodonzia"
}
