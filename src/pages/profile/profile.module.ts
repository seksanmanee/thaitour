/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of profile page
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

// Import dependent module of profile page
import { TimelineComponentModule } from '../../components/timeline/timeline.module';
import { UserProfileIntroductionComponentModule } from '../../components/user-profile-introduction/user-profile-introduction.module';

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    TimelineComponentModule,
    UserProfileIntroductionComponentModule,
    IonicPageModule.forChild(ProfilePage)
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfilePageModule { }
