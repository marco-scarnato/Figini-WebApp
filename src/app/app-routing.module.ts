import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component"
import {TreatmentsComponent} from "./components/pages/treatments/treatments.component";
import {TeamComponent} from "./components/pages/team/team.component";
import {IgieneComponent} from "./components/pages/igiene/igiene.component";
import {ChirurgiaComponent} from "./components/pages/chirurgia/chirurgia.component";
import {EdondonziaComponent} from "./components/pages/edondonzia/edondonzia.component";
import {ImplantologiaComponent} from "./components/pages/implantologia/implantologia.component";
import {ParodontologiaComponent} from "./components/pages/parodontologia/parodontologia.component";
import {PedodonziaComponent} from "./components/pages/pedodonzia/pedodonzia.component";
import {ProtesiComponent} from "./components/pages/protesi/protesi.component";
import {OrtodonziaComponent} from "./components/pages/ortodonzia/ortodonzia.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trattamenti', component:TreatmentsComponent},
  {path: 'studio', component: TeamComponent},

  {path: 'igieneEprofilassi', component: IgieneComponent},
  {path: 'chirugiaOrale', component: ChirurgiaComponent},
  {path: 'endodonzia', component: EdondonziaComponent},
  {path: 'implantologia', component: ImplantologiaComponent},
  {path: 'paradontologia', component: ParodontologiaComponent},
  {path: 'pedodonzia', component:PedodonziaComponent},
  {path: 'protesi', component: ProtesiComponent},
  {path: 'ortodonzia', component: OrtodonziaComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
