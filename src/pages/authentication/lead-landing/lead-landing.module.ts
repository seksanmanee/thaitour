import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadLandingPage } from './lead-landing';

@NgModule({
  declarations: [
    LeadLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadLandingPage),
  ],
})
export class LeadLandingPageModule {}
