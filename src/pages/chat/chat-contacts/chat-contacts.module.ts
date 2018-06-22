/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a module of Chat Contacts
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatContactsPage } from './chat-contacts';

@NgModule({
  declarations: [
    ChatContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatContactsPage),
  ],
  exports: [
    ChatContactsPage
  ]
})
export class ChatContactsPageModule { }
