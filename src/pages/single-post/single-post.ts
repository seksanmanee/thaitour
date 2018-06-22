/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of Single post page
 * File path - '../../../src/pages/single-post/single-post'
 */

import { Component } from '@angular/core';
import { IonicPage, Platform, NavParams, ViewController, ModalController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { UtilsProvider } from '../../providers/utils/utils';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StorageProvider } from '../../providers/utils/storage';
import { AdmobFreeProvider } from '../../providers/admob-free/admob-free';
import { Post } from '../../models/post'; // Post Model

@IonicPage()
@Component({
  selector: 'page-single-post',
  templateUrl: 'single-post.html',
})
export class SinglePostPage {

  postkey: any; // Post Unique Key
  userId: any; // Post owner User ID
  currentUserId: any; // Current user ID
  private postInfo = {} as Post;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private postProvider: PostProvider,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private modalCtrl: ModalController,
    private storageProvider: StorageProvider,
    private utilsProvider: UtilsProvider,
    private admobFree: AdmobFreeProvider) { }

  /***
   * --------------------------------------------------------------
   * Lifecycle Event - ionViewDidLoad()
   * --------------------------------------------------------------
   * 
   * Fired when the page has loaded
   */
  ionViewDidLoad() {
    this.getNavParamsData().then(() => {
      this.loadStorageData().then(() => {
        this.getPostByPostId();
      });
    });
    this.prepareBanner(); // Show banner ad
    this.prepareInterstitial(); // Show Interstitial add
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
   * Get & Set PostKey and Post Owner User ID from navParams
   * --------------------------------------------------------------
   * @method getNavParamsData
   */
  async getNavParamsData() {
    // Get post key from navParams
    if (this.navParams.get('postkey')) {
      this.postkey = this.navParams.get('postkey');
    }
    // Get UserId from navParams
    if (this.navParams.get('userId')) {
      this.userId = this.navParams.get('userId');
    }
  }

  /**
   * --------------------------------------------------------------
   * Get Post Informations
   * --------------------------------------------------------------
   * @method getPostByPostId
   * 
   * This function call `this.postProvider.getPostById` method to get post information
   * by pass userId and post key and bind returning value with `this.postInfo` variable.
   */
  getPostByPostId() {
    try {
      this.postProvider.getPostById(this.userId, this.postkey).then((success: any) => {
        this.postInfo = success;
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Like Post Status
   * --------------------------------------------------------------
   * 
   * @method likePost This function call `this.postProvider.likePost`
   * method to like post status.
   * 
   * @param postkey     Post unique ID/Key
   * @param postOwner   Post owner UserId
   */
  likePost(postkey, postOwner) {
    try {
      this.postProvider.likePost(postkey, postOwner, this.userId)
        .subscribe(() => {
          this.postInfo.isLike = true;
        }, error => {
          console.log(error);
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Unlike like post
   * --------------------------------------------------------------
   * 
   * @method unlikePost This function call `this.postProvider.unlikePost`
   * method to unlike user post status.
   * 
   * @param postkey     Post unique ID/Key
   */
  unlikePost(postkey) {
    try {
      this.postProvider.unlikePost(postkey, this.userId)
        .subscribe(() => {
          this.postInfo.isLike = false;
        }, error => {
          console.log(error);
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Open Comment Page of Specific Post
   * --------------------------------------------------------------
   * @method gotoCommentPage    This function create a modal to open a post
   * comment's page by passing `this.postInfo` object
   */
  gotoCommentPage() {
    this.modalCtrl.create('CommentsPage', { postData: this.postInfo }).present();
  }

  /**
   * --------------------------------------------------------------
   * Share Post
   * --------------------------------------------------------------
   * 
   * @method shareOptions
   * 
   * This function will share posts on various social networks
   */
  shareOptions() {

    let buttons = [
      { text: 'Facebook' },
      { text: 'Twitter' },
      { text: 'WhatsApp' }
    ];

    this.platform.ready()
      .then(() => {
        // Call utils provider `presentActionSheet()` method by passing buttons variable.
        // That will build dynamic action sheets share options based on this buttons.
        this.utilsProvider.presentActionSheet(buttons).then((result) => {
          // If the user click on facebook share option
          if (result === 'Facebook') {
            this.shareViaFacebook();
          }
          // If the user click on Twitter share option
          else if (result === 'Twitter') {
            this.shareViaTwitter();
          }
          // If the user click on WhatsApp share option
          else if (result === 'WhatsApp') {
            this.shareViaWhatsApp();
          }
        });
      });
  }

  /**
   * --------------------------------------------------------------
   * Facebook Share
   * --------------------------------------------------------------
   * @method shareViaFacebook
   * 
   * This function share post on facebook profile
   */
  shareViaFacebook() {
    this.socialSharing.shareViaFacebook(this.postInfo.text, this.postInfo.featureImage, null)
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
   * @method shareViaTwitter
   * 
   * This function share post on twitter
   */
  shareViaTwitter() {
    this.socialSharing.shareViaTwitter(this.postInfo.text, this.postInfo.featureImage, null)
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
   * @method shareViaWhatsApp
   * 
   * This function share post on WhatsApp
   */
  shareViaWhatsApp() {
    this.socialSharing.shareViaWhatsApp(this.postInfo.text, this.postInfo.featureImage, null)
      .then((data) => {
        this.utilsProvider.presentToast('Your post is open to share on WhatsApp', 3000, 'top');
      })
      .catch((err) => {
        this.utilsProvider.presentToast('Failed to share your post', 3000, 'top');
      });
  }

  /**
   * --------------------------------------------------------------
   * Prepare and show admob banner ad
   * --------------------------------------------------------------
   */
  prepareBanner() {
    this.admobFree.prepareBanner();
  }

  /**
   * --------------------------------------------------------------
   * Prepare and show admob Interstitial ad
   * --------------------------------------------------------------
   */
  prepareInterstitial() {
    this.admobFree.prepareInterstitial();
  }

  /**
   * --------------------------------------------------------------
   * Remove banner ad
   * --------------------------------------------------------------
   */
  removeBanner() {
    this.admobFree.removeBanner();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.removeBanner();
    this.viewCtrl.dismiss();
  }
}
