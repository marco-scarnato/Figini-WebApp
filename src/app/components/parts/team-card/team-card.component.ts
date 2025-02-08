import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input() nameCard: string = ""
  srcImage: string = ""
  roleCard: string = ""
  cv_link: string = ""
  curriculum: string = ""

  constructor() {

  }

  ngOnInit(): void {
    if (this.nameCard == "Figini Erika") {
      this.srcImage = "figini_erika.jpg"
      this.roleCard = "Dottoressa"
      this.cv_link = "/assets/cv/cv_figini_e.pdf"
      this.curriculum = "Curriculum"
    } else if (this.nameCard == "Figini Lara") {
      this.srcImage = "figini_lara.jpg"
      this.roleCard = "Dottoressa"
      this.cv_link = "/assets/cv/cv_figini_l.pdf"
      this.curriculum = "Curriculum"
    } else if (this.nameCard == "ASO Andrea") {
      this.srcImage = "assistente_andrea.jpg"
      this.roleCard = "Assistente"
    } else if (this.nameCard == "ASO Barbara") {
      this.srcImage = "assistente_barbara.jpg"
      this.roleCard = "Assistente"
    } else if (this.nameCard == "Figini Mario") {
      this.srcImage = "figini_mario.jpg"
      this.roleCard = "Odontotecnico"
    } else if (this.nameCard == "Capasso Elisa") {
      this.srcImage = "ortodentista_elisa.JPG"
      this.roleCard = "Dottoressa Ortodentista"
      this.cv_link = "/assets/cv/cv_capone_e.pdf"
      this.curriculum = "Curriculum"
    }
  }
}
