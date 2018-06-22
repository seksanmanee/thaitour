/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of friend request
 * File path - '../../../src/pages/friend-request/friend-request'
 */

import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { FriendsProvider } from '../../providers/friends/friends';
import { StorageProvider } from '../../providers/utils/storage';

@IonicPage()
@Component({
  selector: 'page-friend-request',
  templateUrl: 'friend-request.html',
})
export class FriendRequestPage {

  friendRequestList: any = [];
  currentUserId: any;

  constructor(
    private navCtrl: NavController,
    private friendsProvider: FriendsProvider,
    private storageProvider: StorageProvider,
    public modalCtrl: ModalController) { }

  /***
   * --------------------------------------------------------------
   * Lifecycle Event - ionViewDidEnter()
   * --------------------------------------------------------------
   * 
   * Fired when entering a page, after it becomes the active page.
   */
  ionViewDidEnter() {
    this.loadStorageData().then(() => {
      this.getFriendRequest();
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
   * List of User Friend Request
   * --------------------------------------------------------------
   * @method getFriendRequest
   * 
   * This function call `this.friendsProvider.getFriendRequestList` method to get a list
   * of friend request and assign list of data to `this.friendRequestList` array of object
   * property.
   */
  async getFriendRequest() {
    try {
      this.friendsProvider.getFriendRequestList(this.currentUserId).then(list => {
        this.friendRequestList = list;
      });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Accept Friend Request
   * --------------------------------------------------------------
   * @method acceptFriendRequest
   * This function call `this.friendsProvider.confirmFriendRequest` method by passing
   * current and target user ID to accept/confirm friend request.
   * 
   * @param targetUserId    Particular user ID
   * @param i               Index Number List of Friend Request
   * 
   */
  async acceptFriendRequest(targetUserId, i) {
    try {
      await this.friendsProvider.confirmFriendRequest(targetUserId, this.currentUserId)
        .then(success => {
          if (success) {
            this.friendRequestList.splice(i, 1);
          }
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Decline Friend Request
   * --------------------------------------------------------------
   * @method declineFriendRequest
   * This function call `this.friendsProvider.cancelFriendRequest` method by passing
   * target user ID to decline/cancel friend request.
   * 
   * @param targetUserId  Particular user ID
   * @param i             Index Number List of Friend Request
   */
  async declineFriendRequest(targetUserId, i) {
    try {
      await this.friendsProvider.cancelFriendRequest(targetUserId, this.currentUserId)
        .then(success => {
          if (success) {
            this.friendRequestList.splice(i, 1);
          }
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Open User Public Profile
   * --------------------------------------------------------------
   * @param userId    Particular User Id
   */
  gotoUserProfile(userId) {
    let modal = this.modalCtrl.create('UserPublicProfilePage', { userId: userId });
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
  async doRefresh(event) {
    this.getFriendRequest().then(() => {
      event.complete();
    });
  }

  /**
   * --------------------------------------------------------------
   * Refresh Page
   * --------------------------------------------------------------
   * 
   * @method refresh
   */
  refresh() {
    this.navCtrl.setRoot('FriendRequestPage');
  }
}
