/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of friend list page
 * File path - '../../../src/pages/friends/friends'
 */

import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { FriendsProvider } from '../../providers/friends/friends';

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  friendLists: any = []; // Array of friend list
  newFriendLists: any = []; // Array of new friend list
  userId: any; // User Id

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private utilsProvider: UtilsProvider,
    private friendsProvider: FriendsProvider,
    public modalCtrl: ModalController) { }

  /***
   * --------------------------------------------------------------
   * Lifecycle Event - ionViewDidLoad()
   * --------------------------------------------------------------
   * 
   * Fired when the page has loaded
   */
  ionViewDidLoad() {
    this.getNavParamsData().then(() => {
      this.getFriendsList();
    });
  }

  /**
   * --------------------------------------------------------------
   * Get & Set data from navParams
   * --------------------------------------------------------------
   */
  async getNavParamsData() {
    if (this.navParams.get('userId')) {
      this.userId = this.navParams.get('userId');
    }
  }

  /**
   * --------------------------------------------------------------
   * List of Friends
   * --------------------------------------------------------------
   * @method getFriendsList
   * This function call friends provider `getFriendsList` method by userId
   * and the returning list will assign `this.friendLists` variable. 
   */
  getFriendsList() {
    this.utilsProvider.presentLoading();
    this.friendsProvider.getFriendList(this.userId).then((data: any) => {
      this.friendLists = data;
      this.newFriendLists = this.friendLists;
      this.utilsProvider.hideLoading();
    }).catch((err: any) => {
      this.utilsProvider.hideLoading();
    });
  }

  /**
   * --------------------------------------------------------------
   * Search
   * --------------------------------------------------------------
   * @param ev 
   */
  getSearchResult(ev: any) {
    // Reset items back to all of the items
    this.friendLists = this.newFriendLists;
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
   * Unfriend User
   * --------------------------------------------------------------
   * @method unFriend
   * This function works to unfriend or remove user from user friend list. Call a friends provider
   *  `unFriend` method by two params `this.currentUserId` and `this.user.uid`. here, `this.user.uid`
   * is any user ID would like to unfriend and `this.currentUserId` is current user ID.
   */
  unfriend(user) {
    this.utilsProvider.showConfirm(
      `<img src="${user.image}" width="80px !important;">`,
      `Unfriend <b>@${user.name}</b>`)
      .then((ans) => {
        if (ans === 'yes') {
          this.friendsProvider.unFriend(this.userId, user.uid).then(success => {
            if (success) {
              user.isFriends = false;
            }
          });
        }
      });
  }

  /**
   * --------------------------------------------------------------
   * Send Friend Request
   * --------------------------------------------------------------
   * @method sendFriendRequest
   * This function is used to send Friend Requests. Call a friends provider `addFriendRequest` method by
   * two params `this.userId` and `user.uid` here, `user.uid` is any user ID would like to
   * send friend request and `this.userId` is current user ID.
   */
  sendFriendRequest(user) {
    this.friendsProvider.addFriendRequest(this.userId, user.uid)
      .then(success => {
        if (success) {
          user.isFriends = true;
        }
      });
  }

  /**
   * --------------------------------------------------------------
   * Open User Public Profile
   * --------------------------------------------------------------
   * @method gotoUserProfile
   * @param userId
   */
  gotoUserProfile(userId) {
    this.modalCtrl.create('UserPublicProfilePage', { userId: userId }).present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
