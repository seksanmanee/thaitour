/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of recent chat history
 * File path - '../../../../src/pages/chat/chat-recent-history/chat-recent-history'
 */

import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { ChatProvider } from '../../../providers/chat/chat';
import { StorageProvider } from '../../../providers/utils/storage';

@IonicPage()
@Component({
  selector: 'page-chat-recent-history',
  templateUrl: 'chat-recent-history.html',
})
export class ChatRecentHistoryPage {

  currentUserId: any; // Current user Id
  chatHistory: any = []; // Array of chat history

  constructor(
    private storageProvider: StorageProvider,
    private chatProvider: ChatProvider,
    public modalCtrl: ModalController) { }

  /** Do any initialization */
  ngOnInit() {
    this.loadStorageData().then(() => {
      this.getChatHistory();
    });
  }

  /**
   * --------------------------------------------------------------
   * Get localstorage user data
   * --------------------------------------------------------------
   * 
   * @method loadStorageData This function get userId from localstorage
   */
  async loadStorageData() {
    await this.storageProvider.get().then((success: any) => {
      this.currentUserId = success.userId;
    });
  }

  /**
   * --------------------------------------------------------------
   * Chat History
   * --------------------------------------------------------------
   * @method getChatHistory
   */
  async getChatHistory() {
    this.chatProvider.getChatHistoryList(this.currentUserId).then(data => {
      this.chatHistory = data;
    });
  }

  /**
   * --------------------------------------------------------------
   * Open Chat Box
   * --------------------------------------------------------------
   * @method gotoChatBox
   * @param receiver      Receiver object
   * @param index         Index Number
   */
  gotoChatBox(receiver, index) {
    this.chatHistory[index].unreadMsg = 0;
    let modal = this.modalCtrl.create('ChatBoxPage', { receiver: receiver });
    modal.present();
  }

  /**
   * --------------------------------------------------------------
   * Ionic Refresher
   * --------------------------------------------------------------
   * 
   * @method doRefresh The Refresher provides pull-to-refresh
   * functionality on a content component.
   */
  doRefresh(event) {
    this.getChatHistory().then(() => {
      event.complete();
    });
  }
}
