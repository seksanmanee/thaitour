/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a module of news-feed page
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsFeedPage } from './news-feed';
import { MainPipeModule } from '../../pipes/main-pipe.module';

@NgModule({
  declarations: [
    NewsFeedPage
  ],
  imports: [
    MainPipeModule, IonicPageModule.forChild(NewsFeedPage),
  ],
  exports: [
    NewsFeedPage
  ]
})
export class NewsFeedPageModule { }
