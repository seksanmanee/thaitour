/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a module of change password page
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordChangePage } from './password-change';

@NgModule({
  declarations: [
    PasswordChangePage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordChangePage),
  ],
  exports: [
    PasswordChangePage
  ]
})
export class PasswordChangePageModule { }
