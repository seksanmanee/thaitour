/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of friend request page
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendRequestPage } from './friend-request';

@NgModule({
  declarations: [
    FriendRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendRequestPage),
  ],
  exports: [
    FriendRequestPage
  ]
})
export class FriendRequestPageModule { }
