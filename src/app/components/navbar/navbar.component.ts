import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  // Variable to toggle responsive class
  public responsive: boolean = false;
  public isScrolled: boolean = false; // Nuova variabile per gestire lo stato di scroll

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const menu = document.querySelector('.navbar__hamburger');
    if(menu !== null){
      menu.addEventListener("click", () => {
        console.log("Hamburger Clicked!");
        NavbarComponent.toggleMenu();
      });
    }

    const menuOptions = document.querySelectorAll('.navbar__menu li a');
    menuOptions.forEach(menuOpt => {
      menuOpt.addEventListener("click", () => {
        NavbarComponent.toggleMenu();
      });
    });
  }

  private static toggleMenu(): void {
    const content = document.querySelector('.navbar__content');
    const menu_h = document.querySelector('.navbar__menu');
    const ham = document.querySelector('.navbar__hamburger');

    if(content !== null){
      content.classList.toggle('menu_open');
    }
    if(menu_h !== null){
      menu_h.classList.toggle('menu_open');
    }
    if(ham !== null){
      ham.classList.toggle('menu_open');
    }
  }

  // Metodo per gestire lo scroll della finestra
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50; // Imposta lo stato di scroll in base alla posizione dello scroll
  }
}
