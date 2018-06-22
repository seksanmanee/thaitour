/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of following page
 * File path - '../../../src/pages/following/following'
 */

import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ConnectionsProvider } from '../../providers/connections/connections';
import { UtilsProvider } from '../../providers/utils/utils';
import { SharedProvider } from '../../providers/shared/shared';

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {

  followingLists: any = []; // Array of following list
  newFollowingList: any = []; // Array of new following list
  userId: any; // User Id

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private connectionsProvider: ConnectionsProvider,
    private utilsProvider: UtilsProvider,
    private sharedProvider: SharedProvider,
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
      this.getFollowingUsers();
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
   * List of Following User
   * --------------------------------------------------------------
   * @method getFollowingUsers
   * 
   * This function call connection provider `getFollowingUsers` method by userId
   * and the returning list will assign `this.followingLists` variable list of following
   * user's.
   */
  getFollowingUsers() {
    this.utilsProvider.presentLoading(); // Start loading
    this.connectionsProvider.getFollowingUsers(this.userId)
      .then((data: any) => {
        this.followingLists = data;
        this.newFollowingList = this.followingLists;
        this.utilsProvider.hideLoading(); // Hide loading
      }).catch((err: any) => {
        this.utilsProvider.hideLoading(); // Hide loading
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
   * --------------------------------------------------------------
   * Search
   * --------------------------------------------------------------
   * @param ev 
   */
  getSearchResult(ev: any) {
    // Reset items back to all of the items
    this.followingLists = this.newFollowingList;
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.followingLists = this.followingLists.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /**
   * --------------------------------------------------------------
   * Unfollow User
   * --------------------------------------------------------------
   * @method unFollow
   * This function works to unfollow user. Open a confirmation box to ensure that the user
   * really wants to unfollow and call a shared provider `unfollowUser` method by passing
   * two params `this.userId` and `user.uid` here, `user.uid` is any user ID would like to
   * unfollow and `this.userId` is current user ID.
   * 
   */
  unFollow(user) {
    this.utilsProvider.showConfirm(
      `<img src="${user.image}" width="80px !important;">`,
      `Unfollow <b>@${user.name}</b>`)
      .then((ans) => {
        if (ans === 'yes') {
          this.sharedProvider.unfollowUser(this.userId, user.uid).then(success => {
            user.isFollowing = false;
          });
        }
      });
  }

  /**
   * --------------------------------------------------------------
   * Follow User
   * --------------------------------------------------------------
   * @method follow
   * This function works to follow the user and call a connection provider `followUser` method by passing
   * two params `user.uid` and `this.userId`. here, `user.uid` is any user ID would like to
   * follow and `this.userId` is current user ID.
   * 
   */
  follow(user) {
    this.connectionsProvider.followUser(user.uid, this.userId).then(success => {
      success.subscribe(() => {
        user.isFollowing = true;
      });
    }).catch(err => {
      console.log(err);
    });
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
