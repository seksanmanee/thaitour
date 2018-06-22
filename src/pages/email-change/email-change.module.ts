/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of Email Change Page
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailChangePage } from './email-change';

@NgModule({
  declarations: [
    EmailChangePage,
  ],
  imports: [
    IonicPageModule.forChild(EmailChangePage),
  ],
  exports: [
    EmailChangePage
  ]
})
export class EmailChangePageModule { }
