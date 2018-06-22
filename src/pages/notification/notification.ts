/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of notification page
 * File path - '../../../src/pages/notification/notification'
 */

import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { NotificationProvider } from '../../providers/notification/notification';
import { StorageProvider } from '../../providers/utils/storage';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  userId: any;
  notifications: any = [];
  lastkey: any;
  finished = false  // boolean when end of database is reached

  constructor(
    private navCtrl: NavController,
    private notificationProvider: NotificationProvider,
    public modalCtrl: ModalController,
    private storageProvider: StorageProvider) { }

  /***
   * --------------------------------------------------------------
   * Lifecycle Event - ionViewDidEnter()
   * --------------------------------------------------------------
   * 
   * Fired when entering a page, after it becomes the active page.
   */
  ionViewDidEnter() {
    this.loadStorageData().then(() => {
      this.getUserNotification();
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

  /**
   * --------------------------------------------------------------
   * Get User Notifications
   * --------------------------------------------------------------
   * @method getUserNotification
   * 
   * This function call `this.notificationProvider.getNotificationById` method by passing
   * current userId and notification last key. It's retrieve all the notifications and bind
   * returning data with `this.notifications` variable. And check length of `this.notifications`
   * when greater than zero, set the `this.lastkey` in preparation for next
   * query and track `this.lastkey` when equal to  list of `this.notifications` first key
   * then `this.finished` will be true. That means, there are no more post's for next
   * and hide infinite loading.
   */
  async getUserNotification() {
    try {
      this.notificationProvider.getNotificationById(this.userId, this.lastkey)
        .then(data => {
          this.notifications = _.uniqBy(this.notifications.concat(data), 'key');
          if (this.notifications.length > 0) {
            // Set the firstkey in preparation for next query
            this.lastkey = _.last(this.notifications)['key'];
            // If data is identical, stop making queries
            if (this.lastkey == _.first(data)['key']) {
              this.finished = true;
            }
          }
        })
        .catch(err => {
          console.log(err);
        })
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Go to the Specific Post Page
   * --------------------------------------------------------------
   * @method gotoSinglePostPage
   * 
   * This function call `this.notificationProvider.readNotification` method by passing
   * two parameters userId and notification key and make particular notification unread
   * status to read after that, create a modal to open single post page.
   * 
   * @param userId            Post owner userId
   * @param postkey           Post unique key
   * @param notificationKey   Notification unique key
   * @param index             Index number of notification list
   */
  gotoSinglePostPage(userId, postkey, notificationKey, index) {
    this.notificationProvider.readNotification(userId, notificationKey)
      .then(() => {
        this.notifications[index].status = 'read';
        this.modalCtrl.create('SinglePostPage', { userId: userId, postkey: postkey }).present();
      }).catch(err => {
        console.log(err);
      });
  }

  /**
   * --------------------------------------------------------------
   * Go to the Particular User Profile
   * --------------------------------------------------------------
   * @method gotoUserProfile
   * 
   * This function call `this.notificationProvider.readNotification` method by passing
   * two parameters userId and notification key and make particular notification unread
   * status to read after that, create a modal to open particular user public profile.
   * 
   * @param userId        Post owner userId
   * @param key           Notification unique key
   * @param index         Index number of notification list
   */
  gotoUserProfile(userId, key, index) {
    this.notificationProvider.readNotification(userId, key).then(() => {
      this.notifications[index].status = 'read';
      this.modalCtrl.create('UserPublicProfilePage', { userId: userId }).present();
    }).catch(err => {
      console.log(err);
    });
  }

  /**
   * --------------------------------------------------------------
   * Infinite Scroll
   * --------------------------------------------------------------
   * @method doInfinite
   * 
   * The Infinite Scroll allows to perform an action when the user
   * scrolls a specified distance from the bottom or top of the page.
   * and load user next page of notification
   */
  doInfinite(event) {
    setTimeout(() => {
      this.getUserNotification().then(() => {
        event.complete();
      });
    }, 1000);
  }

  /**
   * --------------------------------------------------------------
   * Ionic Refresher
   * --------------------------------------------------------------
   * 
   * @method doRefresh
   * The Refresher provides pull-to-refresh functionality on a content component.
   */
  doRefresh(event) {
    this.lastkey = undefined;
    this.getUserNotification().then(() => {
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
    this.navCtrl.setRoot('NotificationPage');
  }
}
