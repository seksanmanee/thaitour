/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of followers page
 * File path - '../../../src/pages/followers/followers'
 */

import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ConnectionsProvider } from '../../providers/connections/connections';
import { UtilsProvider } from '../../providers/utils/utils';
import { SharedProvider } from '../../providers/shared/shared';

@IonicPage()
@Component({
  selector: 'page-followers',
  templateUrl: 'followers.html',
})
export class FollowersPage {

  followersList: any = []; // Array of followers list
  newFollowersList: any = []; // Array of new followers list
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
      this.getFollowersUser();
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
   * List of Followers
   * --------------------------------------------------------------
   * @method getFollowersUser
   * 
   * This function call connection provider `getFollowersUser` method by userId
   * and the returning list will assign `this.followersList` variable list of followers
   * user's.
   */
  getFollowersUser() {
    this.utilsProvider.presentLoading();
    this.connectionsProvider.getFollowersUser(this.userId).then((data: any) => {
      this.followersList = data;
      this.newFollowersList = this.followersList;
      this.utilsProvider.hideLoading();
    }).catch((err: any) => {
      this.utilsProvider.hideLoading();
    });
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
    // Open a confirm popup box
    this.utilsProvider.showConfirm(
      `<img src="${user.image}" width="80px !important;">`,
      `Unfollow <b>@${user.name}</b>`)
      .then((ans) => {
        // If User select `yes` a shared provider `unfollowUser` method will be call
        // to make this selected user to unfollow
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
   * --------------------------------------------------------------
   * Search
   * --------------------------------------------------------------
   * @param ev 
   */
  getSearchResult(ev: any) {
    // Reset items back to all of the items
    this.followersList = this.newFollowersList;
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.followersList = this.followersList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /**
   * --------------------------------------------------------------
   * Open User Public Profile
   * --------------------------------------------------------------
   * @method gotoUserProfile
   * @param userId
   */
  gotoUserProfile(userId) {
    let modal = this.modalCtrl.create('UserPublicProfilePage', { userId: userId });
    modal.onDidDismiss(() => {
      this.getFollowersUser();
    });
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
