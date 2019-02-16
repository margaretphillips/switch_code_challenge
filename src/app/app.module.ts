import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*content components*/
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { SafetyComponent } from './components/safety/safety.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { BenefitviewComponent } from './components/benefitview/benefitview.component';
import { SafetyviewComponent } from './components/safetyview/safetyview.component';
import { PolicyviewComponent } from './components/policyview/policyview.component';


const appRoutes: Routes = [
  { path: '', component: BenefitsComponent },
  { path: 'benefit/:id', component: BenefitviewComponent },
  { path: 'safety', component: SafetyComponent },
  { path: 'safety/:id', component: SafetyviewComponent },
  { path: 'policy', component: PoliciesComponent },
  { path: 'policy/:id', component: PolicyviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BenefitsComponent,
    SafetyComponent,
    PoliciesComponent,
    BenefitviewComponent,
    SafetyviewComponent,
    PolicyviewComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
