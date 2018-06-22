/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a module of user public profile
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPublicProfilePage } from './user-public-profile';
import { UserProfileIntroductionComponentModule } from '../../components/user-profile-introduction/user-profile-introduction.module';
import { TimelineComponentModule } from '../../components/timeline/timeline.module';

@NgModule({
  declarations: [
    UserPublicProfilePage,
  ],
  imports: [
    TimelineComponentModule,
    UserProfileIntroductionComponentModule,
    IonicPageModule.forChild(UserPublicProfilePage)
  ],
  exports: [
    UserPublicProfilePage
  ]
})
export class UserPublicProfilePageModule { }
