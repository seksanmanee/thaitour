/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of share location page
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareLocationPage } from './share-location';

@NgModule({
  declarations: [
    ShareLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(ShareLocationPage),
  ],
  exports: [
    ShareLocationPage
  ]
})
export class ShareLocationPageModule { }
