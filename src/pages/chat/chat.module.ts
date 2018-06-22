/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents module of chat page
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';

@NgModule({
  declarations: [
    ChatPage
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
  ],
  exports: [
    ChatPage
  ]
})
export class ChatPageModule { }
