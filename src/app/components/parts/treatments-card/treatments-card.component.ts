import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-treatments-card',
  templateUrl: './treatments-card.component.html',
  styleUrls: ['./treatments-card.component.css']
})
export class TreatmentsCardComponent implements OnInit{
  @Input() nameCard: string = "Igiene e Profilassi"
  srcImage : string = ""
  hrefCard : string = ""

  constructor() {

  }

  ngOnInit(): void {
    if (this.nameCard == "Igiene e Profilassi"){
      this.srcImage = "igiene-1-copertina.jpg"
      this.hrefCard = "/trattamenti/igieneEprofilassi"
    }else if(this.nameCard == "Endodonzia e Odontoiatria Conservativa"){
      this.srcImage = "endon-1.JPG"
      this.hrefCard = "/trattamenti/endodonzia"
    }else if(this.nameCard == "Parodontologia"){
      this.srcImage = "parodon-1.jpg"
      this.hrefCard = "/trattamenti/paradontologia"
    }else if(this.nameCard == "Implantologia"){
      this.srcImage = "implanto-1-copertina.jpg"
      this.hrefCard = "/trattamenti/implantologia"
    }else if(this.nameCard == "Pedodonzia"){
      this.srcImage = "pedo-1-copertina.JPG"
      this.hrefCard = "/trattamenti/pedodonzia"
    }else if(this.nameCard == "Chirurgia Orale"){
      this.srcImage = "chirurgia-1-copertina.jpg"
      this.hrefCard = "/trattamenti/chirugiaOrale"
    }else if(this.nameCard == "Protesi"){
      this.srcImage = "protesi-7-copertina.jpg"
      this.hrefCard = "/trattamenti/protesi"
    }else if(this.nameCard == "Ortodonzia"){
      this.srcImage = "ortod-1-vis.jpg"
      this.hrefCard = "/trattamenti/ortodonzia"
    }
  }
}
