/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of chat box
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatBoxPage } from './chat-box';
import { MainPipeModule } from '../../../pipes/main-pipe.module';

@NgModule({
  declarations: [
    ChatBoxPage
  ],
  imports: [
    MainPipeModule, IonicPageModule.forChild(ChatBoxPage),
  ],
  exports: [
    ChatBoxPage
  ]
})
export class ChatBoxPageModule { }
