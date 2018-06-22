/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of status comment
 * File path - '../../../src/pages/comments/comments'
 */

import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post'; // Post provider
import { StorageProvider } from '../../providers/utils/storage'; // Storage provider
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  content: any;
  allComments: any = []; // List of Comments
  postInfo: any; // Particular Post Information
  currentUserId: any; // Current User ID
  lastkey: any; // List of Comment LastKey
  finished = false; // Boolean When Wnd of Database is Reached

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private postProvider: PostProvider,
    private storageProvider: StorageProvider) { }

  /***
   * --------------------------------------------------------------
   * Lifecycle Event - ionViewDidLoad()
   * --------------------------------------------------------------
   * 
   * Fired when the page has loaded
   */
  ionViewDidLoad() {
    this.loadStorageData();
    this.getPostInformation().then(() => {
      this.getComments();
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
    this.storageProvider.get().then((success: any) => {
      this.currentUserId = success.userId;
    });
  }

  /**
   * --------------------------------------------------------------
   * Get & Set Post data from navParams
   * --------------------------------------------------------------
   */
  async getPostInformation() {
    // Get post information from navParams
    if (this.navParams.get('postData')) {
      this.postInfo = this.navParams.get('postData');
    }
  }

  /**
   * --------------------------------------------------------------
   * Get Comments of Particular Post
   * --------------------------------------------------------------
   * @method getComments
   * 
   * This function call `this.postProvider.getCommentsByPostId method by passing two parameters,
   * and the returning data bind with `this.allComments` variable that is list of comments of post.
   * And then check lengh of `this.allComments` when greater than zero, set the `this.lastkey` in
   * preparation for next query and track `this.lastkey` when equal to  list of `this.allComments` first
   * key then `this.finished` will be true. That means, there are no more comment's for next query
   * and hide infinite loading.
   */
  async getComments() {
    try {
      // Request to post provider to get comments of specific post
      await this.postProvider.getCommentsByPostId(this.postInfo.key, this.lastkey)
        .then(data => {
          // Make unique list of comments by `commentKey`
          this.allComments = _.uniqBy(this.allComments.concat(data), 'commentKey');
          // Check if any comments exist or not 
          if (this.allComments.length > 0) {
            // set the lastkey in preparation for next query
            this.lastkey = _.last(this.allComments)['commentKey'];

            // If data is identical, stop making queries
            if (this.lastkey == _.first(data)['commentKey']) {
              this.finished = true;
            }
          }
        });
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * New Comment
   * --------------------------------------------------------------
   * @method newComment
   * 
   * This function call `this.postProvider.createComment` method by passing comment content,
   * particular post information and current userId and create a new comment for this particular
   * post.
   */
  newComment() {
    try {
      this.postProvider.createComment(this.content, this.postInfo, this.currentUserId)
        .then(success => {
          this.content = '';
        });
    } catch (err) {
      console.log(err)
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
  doRefresh(event) {
    this.lastkey = undefined;
    this.getComments().then(() => {
      event.complete();
    });
  }

  /**
   * Infinite Scroll
   * @param event 
   * 
   * Load post comments next datas
   */
  /**
   * --------------------------------------------------------------
   * Infinite Scroll
   * --------------------------------------------------------------
   * @method doInfinite
   * 
   * The Infinite Scroll allows to perform an action when the user
   * scrolls a specified distance from the bottom or top of the page.
   * `this.getComments` function will be call for loading more comments.
   */
  doInfinite(event) {
    setTimeout(() => {
      this.getComments().then(() => {
        event.complete();
      });
    }, 1000);
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
