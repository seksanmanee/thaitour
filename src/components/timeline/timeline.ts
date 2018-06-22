/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of timeline
 * File path - '../../../../src/pages/components/timeline/timeline
 */

import { Component } from '@angular/core';
import { NavParams, Platform, ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PostProvider } from '../../providers/post/post';
import { StorageProvider } from '../../providers/utils/storage';
import { UtilsProvider } from '../../providers/utils/utils';
import { FriendsProvider } from '../../providers/friends/friends';
import * as _ from 'lodash';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  userId: any; // Any User Id
  currentUserId: any; // Current User ID
  posts: any = []; // Timeline Post
  firstkey: any; // Define timeline post first-key
  finished = false; // Boolean when end of database is reached

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private postProvider: PostProvider,
    private storageProvider: StorageProvider,
    private utilsProvider: UtilsProvider,
    private friendsProvider: FriendsProvider) { }

  /**
   * Do any initialization
   */
  ngOnInit() {
    this.loadStorageData().then(() => {
      this.getNavParamsData().then(() => {
        this.loadTimelinePost();
      })
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
   * Load Timeline Posts
   * --------------------------------------------------------------
   * @method loadTimelinePost This function check userId is curent or
   * someone else's ID. Based on the user ID It's call `this.getTimelinePosts`
   * function to load particular user timeline posts.
   */
  async loadTimelinePost() {
    if (this.userId) {
      await this.getTimelinePosts(this.userId);
    } else {
      await this.getTimelinePosts(this.currentUserId);
    }
  }

  /**
   * --------------------------------------------------------------
   * User Timeline Post
   * --------------------------------------------------------------
   * @method getTimelinePosts
   * @param userId
   */
  async getTimelinePosts(userId) {
    try {
      this.postProvider
        .getTimeLinePosts(userId, this.firstkey)
        .then(data => {
          this.posts = _.uniqBy(this.posts.concat(data), 'key');
          if (this.posts.length > 0) {
            // set the firstkey in preparation for next query
            this.firstkey = _.first(data)['key'];
            // If data is identical, stop making queries
            if (this.firstkey == _.last(this.posts)['key']) {
              this.finished = true;
            }
          }
        })
        .catch((err: any) => {
          console.log(err);
        })
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Like Post
   * --------------------------------------------------------------
   * 
   * @method likePost
   * This function call post provider `likePost` method to like a post.
   * 
   * @param postkey       Post Unique ID/Key
   * @param postOwner     Post Owner UserId
   * @param index         Index Number of Timeline Post
   */
  likePost(postkey, postOwner, index) {
    try {
      this.postProvider.likePost(postkey, postOwner, this.currentUserId)
        .subscribe(() => {
          this.posts[index].isLike = true;
        }, error => {
          console.log(error);
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Unlike Post
   * --------------------------------------------------------------
   * 
   * @method unlikePost
   * This function call post provider `unlikePost` method to unlike a post.
   * 
   * @param postkey     Post Unique ID/Key
   * @param index       Index Number of Timeline Post
   */
  unlikePost(postkey, index) {
    try {
      this.postProvider.unlikePost(postkey, this.currentUserId)
        .subscribe(() => {
          this.posts[index].isLike = false;
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
   * @param post      Post Information
   * @param index     Index Number of Timeline Posts
   * 
   * Check If the current userId `this.currentUserId` will match with post
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

    if (post.uid === this.currentUserId) {

      let buttons = [
        { text: 'Delete', className: 'red-color' },
        { text: 'Edit', className: 'black-color' }
      ];

      // Call utils provider `presentActionSheet()` method by passing buttons variable.
      // That will build dynamic action sheets based on this buttons.
      this.utilsProvider.presentActionSheet(buttons).then((data) => {

        if (data === 'Delete') {
          // Call `this.postProvider.deletePost` method by userId and post-key
          // It'll remove particular post from database.
          this.postProvider.deletePost(this.userId, post.key).then((success) => {
            this.posts.splice(index, 1);
            this.utilsProvider.presentToast('Your post deleted successfully', 3000, 'top');
          });
        }
        else if (data === 'Edit') {
          // Create a modal to open post page and update particular post page
          let modal = this.modalCtrl.create('PostPage', { postInfo: post });
          modal.onDidDismiss(data => {
            if (data) {
              this.utilsProvider.presentToast('Your post edited successfully', 3000, 'top');
            }
          });
          modal.present();
        }
      });
    }
    else {
      let buttons = [{ text: 'UnFriend', className: 'black-color' }];

      this.utilsProvider.presentActionSheet(buttons).then((data) => {

        if (data === 'UnFriend') {
          // Call `this.friendsProvider.unFriend` method by userId and post owner Id
          // It will unfriend the post owner from the current user friend list
          this.friendsProvider.unFriend(this.userId, post.uid).then(success => {
            // Remove all the post owner post from user news feed.
            this.posts = this.posts.filter((n) => n.uid !== post.uid);
          });
        }
      });
    }
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
    let modal = this.modalCtrl.create('CommentsPage', { userId: this.userId, postData: postData });
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
   * and load user next timeline posts
   */
  doInfinite(event) {
    setTimeout(() => {
      this.loadTimelinePost().then(() => {
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
    this.loadTimelinePost().then(() => {
      event.complete();
    });
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
}
