import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserProfileIntroductionComponent } from './user-profile-introduction';

@NgModule({
  declarations: [
    UserProfileIntroductionComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    UserProfileIntroductionComponent
  ]
})
export class UserProfileIntroductionComponentModule { }
