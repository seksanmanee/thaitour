/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of chat contacts
 * File path - '../../../../src/pages/chat/chat-contacts/chat-contacts'
 */

import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { FriendsProvider } from '../../../providers/friends/friends';
import { StorageProvider } from '../../../providers/utils/storage';

@IonicPage()
@Component({
  selector: 'page-chat-contacts',
  templateUrl: 'chat-contacts.html',
})
export class ChatContactsPage {

  friendLists: any = []; // Array of friend list
  newFrndList: Array<any> = []; // Array of new friend list
  currentUserId: any; // Current user Id

  constructor(
    public modalCtrl: ModalController,
    private friendsProvider: FriendsProvider,
    private storageProvider: StorageProvider) { }

  /** Do any initialization */
  ngOnInit() {
    this.loadStorageData().then(() => {
      this.getFriendList();
    });
  }

  /**
   * --------------------------------------------------------------
   * Get Localstorage User Data
   * --------------------------------------------------------------
   * @method loadStorageData This function get userId from localstorage
   */
  async loadStorageData() {
    await this.storageProvider.get().then((success: any) => {
      this.currentUserId = success.userId;
    });
  }

  /**
   * --------------------------------------------------------------
   * Get List of User Friends 
   * --------------------------------------------------------------
   * @method getFriendsList   This function call friends provider
   * `getFriendsList` method by current user ID and the returning list will assign
   * in this `this.friendLists` variable.
   */
  async getFriendList() {
    try {
      await this.friendsProvider.getChatFriends(this.currentUserId).then(success => {
        if (success) {
          this.friendLists = success;
          this.newFrndList = this.friendLists;
        }
      });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Search
   * --------------------------------------------------------------
   * @param ev 
   */
  getSearchResult(ev: any) {
    // Reset items back to all of the items
    this.friendLists = this.newFrndList;
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.friendLists = this.friendLists.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /**
   * --------------------------------------------------------------
   * Open Chat Box
   * --------------------------------------------------------------
   * @param receiver      Opposite User Information
   * @param index         Index Number List of Chat Friends
   */
  gotoChatBox(receiver, index) {
    this.friendLists[index].unreadMsg = 0;
    let modal = this.modalCtrl.create('ChatBoxPage', { receiver: receiver });
    modal.present();
  }
}
