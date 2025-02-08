import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {BannerComponent} from './components/banner/banner.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreatmentsComponent } from './components/pages/treatments/treatments.component';
import { TeamComponent } from './components/pages/team/team.component';
import { IgieneComponent } from './components/pages/igiene/igiene.component';
import { EdondonziaComponent } from './components/pages/edondonzia/edondonzia.component';
import { ParodontologiaComponent } from './components/pages/parodontologia/parodontologia.component';
import { ImplantologiaComponent } from './components/pages/implantologia/implantologia.component';
import { PedodonziaComponent } from './components/pages/pedodonzia/pedodonzia.component';
import { ChirurgiaComponent } from './components/pages/chirurgia/chirurgia.component';
import { ProtesiComponent } from './components/pages/protesi/protesi.component';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/parts/intro/intro.component';
import { IntroTeamComponent } from './components/parts/intro-team/intro-team.component';
import { IntroTreatmentsComponent } from './components/parts/intro-treatments/intro-treatments.component';
import { ContactsComponent } from './components/parts/contacts/contacts.component';
import { ButtonLinkComponent } from './components/parts/button-link/button-link.component';
import { TreatmentsCardComponent } from './components/parts/treatments-card/treatments-card.component';
import { OrtodonziaComponent } from './components/pages/ortodonzia/ortodonzia.component';
import { TeamCardComponent } from './components/parts/team-card/team-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    TreatmentsComponent,
    TeamComponent,
    IgieneComponent,
    EdondonziaComponent,
    ParodontologiaComponent,
    ImplantologiaComponent,
    PedodonziaComponent,
    ChirurgiaComponent,
    ProtesiComponent,
    FooterLinksComponent,
    NavbarComponent,
    IntroComponent,
    IntroTeamComponent,
    IntroTreatmentsComponent,
    ContactsComponent,
    ButtonLinkComponent,
    TreatmentsCardComponent,
    OrtodonziaComponent,
    TeamCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
