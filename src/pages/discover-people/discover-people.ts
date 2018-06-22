/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of discover people
 * File path - '../../../src/pages/discover-people/discover-people'
 */

import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController } from 'ionic-angular';
import { FriendsProvider } from '../../providers/friends/friends';
import { ConnectionsProvider } from '../../providers/connections/connections';
import { StorageProvider } from '../../providers/utils/storage';

@IonicPage()
@Component({
  selector: 'page-discover-people',
  templateUrl: 'discover-people.html',
})
export class DiscoverPeoplePage {

  suggestedUsers: any = []; // List of Suggested Users
  currentUserId: any; // Current User ID

  constructor(
    private viewCtrl: ViewController,
    private friendsProvider: FriendsProvider,
    private storageProvider: StorageProvider,
    private connectionsProvider: ConnectionsProvider,
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
      this.getSuggestedUsers();
    });
  }

  /**
   * --------------------------------------------------------------
   * Get Localstorage User Data
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
   * Suggested Users
   * --------------------------------------------------------------
   * @method getSuggestedUsers
   * 
   * This function load suggested users by calling connection provider
   * `getDiscoverPeoples` method.
   */
  async getSuggestedUsers() {
    try {
      this.connectionsProvider.getDiscoverPeoples(this.currentUserId)
        .then(data => {
          this.suggestedUsers = data;
        }).catch(error => {
          console.log(error);
        });
    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Follow User
   * --------------------------------------------------------------
   * @method follow
   * This function works to follow user and call a connection provider `followUser` method by passing
   * two params `targetUserId` and `this.currentUserId`. here, `targetUserId` is any user ID would like to
   * follow and `this.currentUserId` is current user ID.
   * 
   * @param targetUserId  Selecte User ID
   * @param index Selected Array Index Number
   */
  async followUser(targetUserId, index) {
    try {
      this.connectionsProvider.followUser(targetUserId, this.currentUserId).then(success => {
        success.subscribe(() => {
          this.suggestedUsers.splice(index, 1);
        });
      }).catch(err => {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Send Friend Request
   * --------------------------------------------------------------
   * @method sendFriendRequest
   * This function is used to send Friend Requests. Call a friends provider `addFriendRequest` method by
   * two params `this.currentUserId` and `receiverId` here, `receiverId` is any user ID would like to
   * send friend request and `this.currentUserId` is current user ID.
   * 
   * @param receiverId Whom I want to send friend request
   * @param index Selected Array Index Number
   */
  async sendFriendRequest(receiverId, index) {
    try {
      await this.friendsProvider.addFriendRequest(this.currentUserId, receiverId)
        .then(success => {
          if (success) {
            this.suggestedUsers.splice(index, 1);
          }
        });
    }
    catch (err) {
      console.log(err);
    }
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
    this.getSuggestedUsers().then(() => {
      event.complete();
    });
  }

  /**
   * --------------------------------------------------------------
   * Open Particular User Profile
   * --------------------------------------------------------------
   * @method gotoUserProfile
   * 
   * This function create a modal to open particular user public profile.
   * 
   * @param userId
   */
  gotoUserProfile(userId) {
    let modal = this.modalCtrl.create('UserPublicProfilePage', { userId: userId });
    modal.present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
