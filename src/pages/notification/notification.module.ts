/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a module of notification page
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPage } from './notification';
import { MainPipeModule } from '../../pipes/main-pipe.module';

@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    MainPipeModule, IonicPageModule.forChild(NotificationPage),
  ],
  exports: [
    NotificationPage
  ]
})
export class NotificationPageModule { }
