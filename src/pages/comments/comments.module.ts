/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of comment page
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsPage } from './comments';

// import main pipe module to access all the filters
import { MainPipeModule } from '../../pipes/main-pipe.module';

@NgModule({
  declarations: [
    CommentsPage,
  ],
  imports: [
    MainPipeModule, IonicPageModule.forChild(CommentsPage),
  ],
  exports: [
    CommentsPage
  ]
})
export class CommentsPageModule { }
