/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of recent chat history
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatRecentHistoryPage } from './chat-recent-history';
import { MainPipeModule } from '../../../pipes/main-pipe.module';

@NgModule({
  declarations: [
    ChatRecentHistoryPage,
  ],
  imports: [
    MainPipeModule, IonicPageModule.forChild(ChatRecentHistoryPage),
  ],
  exports: [
    ChatRecentHistoryPage
  ]
})
export class ChatRecentHistoryPageModule { }
