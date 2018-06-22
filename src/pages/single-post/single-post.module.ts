/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a module of status view page
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglePostPage } from './single-post';
import { MainPipeModule } from '../../pipes/main-pipe.module';

@NgModule({
  declarations: [
    SinglePostPage,
  ],
  imports: [
    MainPipeModule, IonicPageModule.forChild(SinglePostPage),
  ],
  exports: [
    SinglePostPage
  ]
})
export class SinglePostPageModule { }
