/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of news feed page
 * File path - '../../../src/pages/news-feed/news-feed'
 */

import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { PostProvider } from '../../providers/post/post';
import { ChatProvider } from '../../providers/chat/chat';
import { StorageProvider } from '../../providers/utils/storage';
import { UtilsProvider } from '../../providers/utils/utils';
import { FriendsProvider } from '../../providers/friends/friends';
import { AdmobFreeProvider } from '../../providers/admob-free/admob-free';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-news-feed',
  templateUrl: 'news-feed.html'
})

export class NewsFeedPage {

  private newsFeedPost: any = []; // define news feed post
  private userId: any; // User Id
  public totalUnreadMsg: any = 0; // Count total unread message
  private firstkey: any; // Define newsfeed post first-key
  public finished = false  // boolean when end of database is reached

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private authProvider: AuthenticationProvider,
    private postProvider: PostProvider,
    private storageProvider: StorageProvider,
    private chatProvider: ChatProvider,
    private utilsProvider: UtilsProvider,
    private friendsProvider: FriendsProvider,
    private admobFree: AdmobFreeProvider) {
  }

  /** Do any initialization */
  ngOnInit() {
    this.loadStorageData().then(() => {
      this.getNewsFeedPosts();
      this.totalUnreadChat();
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
      this.userId = success.userId;
    });
  }

  /***
   * --------------------------------------------------------------
   * Load User Newsfeed Posts
   * --------------------------------------------------------------
   * 
   * @method getNewsFeedPosts This function load all following users post's
   * 
   * By calling `postProvider.getNewsFeedPosts()` method It's find out all
   * the following user's latest post's and bind returning data with
   * `this.newsFeedPost` property. And check length of `this.newsFeedPost`
   * when greater than zero, set the `this.firstkey` in preparation for next
   * query and track `this.firstkey` when equal to  list of `this.newsFeedPost` last key
   * then `this.finished` will be true. That means, there are no more post's for next
   * and hide infinite loading.
   */
  async getNewsFeedPosts() {
    try {
      this.postProvider
        .getNewsFeedPosts(this.userId, this.firstkey)
        .then(data => {
          this.newsFeedPost = _.uniqBy(this.newsFeedPost.concat(data), 'key');
          if (this.newsFeedPost.length > 0) {
            // Set the firstkey in preparation for next query
            this.firstkey = _.first(data)['key'];
            // If data is identical, stop making queries
            if (this.firstkey == _.last(this.newsFeedPost)['key']) {
              this.finished = true;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Total Count of Unread Chat Thread
   * --------------------------------------------------------------
   * 
   * @method totalUnreadChat This function count total unread chat thread
   *  
   * By calling `this.chatProvider.totalUnreadChat` method, success return total
   * count of unread chat thread and bind that value with this `this.totalUnreadMsg`
   * property on header section. 
   */
  totalUnreadChat() {
    this.chatProvider.totalUnreadChat(this.userId).subscribe(count => {
      this.totalUnreadMsg = count;
    }, error => {
      console.log(error);
    });
  }

  /**
   * --------------------------------------------------------------
   * Like folling user's post status
   * --------------------------------------------------------------
   * 
   * @method likePost This function call `this.postProvider.likePost`
   * method to like user post status.
   * @param postkey Post unique ID/Key
   * @param postOwner Post owner UserId
   * @param index Index number of newsfeed post
   */
  likePost(postkey, postOwner, index) {
    try {
      this.postProvider.likePost(postkey, postOwner, this.userId).subscribe(() => {
        this.utilsProvider.presentToast('Your like one newsfeed post', 3000, 'top');
        this.newsFeedPost[index].isLike = true;
      }, error => {
        console.log(error);
      });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Unlike like post
   * --------------------------------------------------------------
   * 
   * @method unlikePost This function call `this.postProvider.unlikePost`
   * method to unlike user post status.
   * @param postkey Post unique ID/Key
   * @param index Index number of newsfeed post
   */
  unlikePost(postkey, index) {
    try {
      this.postProvider.unlikePost(postkey, this.userId).subscribe(() => {
        this.newsFeedPost[index].isLike = false;
      }, error => {
        console.log(error);
      });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Post Status Options
   * --------------------------------------------------------------
   * 
   * @method postOptions This function display a set of options with the
   * ability to edit, delete post and view user profile.
   * @param post post information
   * @param index Index number of newsfeed posts
   * 
   * Check If the current userId `this.userId` will match with post
   * ownerId `post.uid` then `If` condition will work, If not in this case
   * 'Else' condition will work.
   * 
   * If post ownerId match with current userId then `this.utilsProvider.presentActionSheet`
   * method open Action Sheets slide up from the bottom edge of the device screen, and
   * display a set of button options with the ability to `Delete` and `Edit` actions.
   * Elsewhere, post ownerId don't match with current userId then
   * `this.utilsProvider.presentActionSheet` method open Action Sheets with set of
   * button options with the ability to `UnFriend` and `View User Profile` action.
   */
  postOptions(post, index) {

    if (post.uid === this.userId) {

      let buttons = [
        { text: 'Delete', className: 'red-color' },
        { text: 'Edit', className: 'black-color' }
      ];

      // Call utils provider `presentActionSheet()` method by buttons variable.
      // That will build dynamic action sheets based on this buttons.
      this.utilsProvider.presentActionSheet(buttons).then((data) => {
        if (data === 'Delete') {
          // Call `this.postProvider.deletePost` method by userId and post-key
          // It'll remove particular post from database.
          this.postProvider.deletePost(this.userId, post.key).then((success) => {
            this.newsFeedPost.splice(index, 1);
            this.utilsProvider.presentToast('Your post deleted successfully', 3000, 'top');
          });
        }
        else if (data === 'Edit') {
          // Create a modal to open post page and update particular post page
          let modal = this.modalCtrl.create('PostPage', { postInfo: post });
          modal.onDidDismiss(data => {
            if (data) {
              this.refresh();
            }
          });
          modal.present();
        }
      });
    }
    else {
      let buttons = [
        { text: 'UnFriend', className: 'black-color' },
        { text: 'View User Profile', className: 'black-color' }
      ];

      this.utilsProvider.presentActionSheet(buttons).then((data) => {
        if (data === 'UnFriend') {
          // Call `this.friendsProvider.unFriend` method by userId and post owner Id
          // It will unfriend the post owner from the current user friend list
          this.friendsProvider.unFriend(this.userId, post.uid).then(success => {
            // Remove all the post owner post from user news feed.
            this.newsFeedPost = this.newsFeedPost.filter((n) => n.uid !== post.uid);
          });
        }
        else if (data === 'View User Profile') {
          this.gotoUserProfile(post.uid);
        }
      });
    }
  }

  /**
   * --------------------------------------------------------------
   * Open Post Page
   * --------------------------------------------------------------
   * 
   * @method openPostPage This function create a modal to open post page.
   */
  openPostPage() {
    let modal = this.modalCtrl.create('PostPage');
    modal.onDidDismiss((data) => {
      console.log(data)
      if (data.success === true) {
        console.log('true')
        // this.refresh();
        this.navCtrl.setRoot('NewsFeedPage');
      }
    });
    modal.present();
  }

  /**
   * --------------------------------------------------------------
   * Open Comment Page
   * --------------------------------------------------------------
   * 
   * @method gotoCommentPage This function create a modal to open comment page
   * by specific post infos to see the post comment's
   * @param postData  Particular Post Information
   * 
   */
  gotoCommentPage(postData) {
    let modal = this.modalCtrl.create('CommentsPage', { postData: postData });
    modal.present();
  }

  /**
   * --------------------------------------------------------------
   * Open Chat Page
   * --------------------------------------------------------------
   * @method gotoChatPage This function create a modal to open chat window
   * by passing current user Id.
   */
  gotoChatPage() {
    let modal = this.modalCtrl.create('ChatPage', { userId: this.userId });
    modal.present();
  }

  /**
   * --------------------------------------------------------------
   * Open User Profile
   * --------------------------------------------------------------
   * @method gotoUserProfile  This function create a modal to open
   * user profile by passing specific user Id.
   * @param userId
   */
  gotoUserProfile(userId) {
    let modal = this.modalCtrl.create('UserPublicProfilePage', { userId: userId });
    modal.present();
  }

  /**
   * --------------------------------------------------------------
   * Infinite Scroll
   * --------------------------------------------------------------
   * @method doInfinite
   * 
   * The Infinite Scroll allows to perform an action when the user
   * scrolls a specified distance from the bottom or top of the page.
   * and load user next newsfeed posts
   */
  doInfinite(event) {
    setTimeout(() => {
      this.getNewsFeedPosts().then(() => {
        event.complete();
      });
    }, 1000);
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
    this.firstkey = undefined;
    this.getNewsFeedPosts().then(() => {
      event.complete();
    });
  }

  /**
   * --------------------------------------------------------------
   * Refresh
   * --------------------------------------------------------------
   * 
   * @method refresh Refresh and load user home page
   */
  refresh() {
    this.navCtrl.setRoot('NewsFeedPage');
  }

  /**
   * --------------------------------------------------------------
   * Logout
   * --------------------------------------------------------------
   * 
   * @method logout 
   * 
   * By Calling `this.authProvider.logout` method It's logout the user account.
   */
  logout() {
    this.prepareInterstitial();
    this.authProvider.logout();
  }

  /**
   * --------------------------------------------------------------
   * Post Status Share
   * --------------------------------------------------------------
   * 
   * @method shareOptions This function will share posts various social networks
   * @param data Particular Post informations
   */
  shareOptions(data) {

    let buttons = [
      { text: 'Facebook' },
      { text: 'Twitter' },
      { text: 'WhatsApp' }
    ];

    this.platform.ready()
      .then(() => {
        // Call utils provider `presentActionSheet()` method by buttons variable.
        // That will build dynamic action sheets share options based on this buttons.
        this.utilsProvider.presentActionSheet(buttons).then((result) => {
          // If the user click on facebook share option
          if (result === 'Facebook') {
            this.shareViaFacebook(data);
          }
          // If the user click on Twitter share option
          else if (result === 'Twitter') {
            this.shareViaTwitter(data);
          }
          // If the user click on WhatsApp share option
          else if (result === 'WhatsApp') {
            this.shareViaWhatsApp(data);
          }
        });
      });
  }

  /**
   * --------------------------------------------------------------
   * Facebook Share
   * --------------------------------------------------------------
   * @method shareViaFacebook This function share post on facebook profile
   * @param postInfo Particular Post Information
   */
  shareViaFacebook(postInfo) {
    this.socialSharing.shareViaFacebook(postInfo.text, postInfo.featureImage, null)
      .then((data) => {
        this.utilsProvider.presentToast('Your post is open to share on Facebook', 3000, 'top');
      })
      .catch((err) => {
        this.utilsProvider.presentToast('Failed to share your post', 3000, 'top');
      });
  }

  /**
   * --------------------------------------------------------------
   * Twitter Share
   * --------------------------------------------------------------
   * @method shareViaTwitter This function share post on twitter
   * @param postInfo Particular Post Information
   */
  shareViaTwitter(postInfo) {
    this.socialSharing.shareViaTwitter(postInfo.text, postInfo.featureImage, null)
      .then((data) => {
        this.utilsProvider.presentToast('Your post is open to share on Twitter', 3000, 'top');
      })
      .catch((err) => {
        this.utilsProvider.presentToast('Failed to share your post', 3000, 'top');
      });
  }

  /**
   * --------------------------------------------------------------
   * WhatsApp Share
   * --------------------------------------------------------------
   * @method shareViaWhatsApp This function share post on WhatsApp
   * @param postInfo Particular Post Information
   */
  shareViaWhatsApp(postInfo) {
    this.socialSharing.shareViaWhatsApp(postInfo.text, postInfo.featureImage, null)
      .then((data) => {
        this.utilsProvider.presentToast('Your post is open to share on WhatsApp', 3000, 'top');
      })
      .catch((err) => {
        this.utilsProvider.presentToast('Failed to share your post', 3000, 'top');
      });
  }

  /**
   * Prepare and show admob Interstitial ad
   */
  prepareInterstitial() {
    this.admobFree.prepareInterstitial();
  }
}