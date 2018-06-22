/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of home page
 * File path - '../../../src/pages/home/home'
 */

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

// Import proviers
import { NotificationProvider } from '../../providers/notification/notification';
import { StorageProvider } from '../../providers/utils/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // Define tabs
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  tab5: string;

  userId: any; // Current user Id
  totalRequest: any = 0; // Define total friend request
  unreadNotification: any = 0; // Define total unread notification
  subscription: any;

  constructor(
    private notificationProvider: NotificationProvider,
    private storageProvider: StorageProvider) {

    this.tab1 = 'NewsFeedPage'; // Define `tab1` to `NewsFeedPage`
    this.tab2 = 'FriendRequestPage'; // Define `tab2` to `FriendRequestPage`
    this.tab3 = 'FriendsLocationMapPage'; // Define `tab3` to `FriendsLocationMapPage`
    this.tab4 = 'NotificationPage'; // Define `tab4` to `NotificationPage`
    this.tab5 = 'ProfilePage'; // Define `tab5` to `ProfilePage`
  }

  /** Do any initialization */
  ngOnInit() {
    // Get current userId from local storage
    this.storageProvider.get().then((success: any) => {
      this.userId = success.userId;

      this.totalFriendRequest();
      this.totalUnreadNotification();
    });
  }

  /**
   * --------------------------------------------------------------
   * Total Friend Request
   * --------------------------------------------------------------
   * @method totalFriendRequest
   * 
   * This function call `this.notificationProvider.totalFriendRequest` method by
   * passing current user ID and this return total pending friend request and assign
   * returning value with `this.totalRequest` variable and bind this value on tab two
   * in user home page.
   */
  async totalFriendRequest() {
    try {
      this.subscription = await this.notificationProvider.totalFriendRequest(this.userId)
        .subscribe(totalRequest => {
          this.totalRequest = totalRequest;
        });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Total Unread Notification
   * --------------------------------------------------------------
   * @method totalUnreadNotification
   * This function call `this.notificationProvider.totalUnreadNotification` method
   * by passing current user Id and this return the total number of unread notification,
   * assign returning value with `this.unreadNotification` variable and bind this value
   * on tab four in user home page.
   */
  async totalUnreadNotification() {
    try {
      this.subscription = await this.notificationProvider.totalUnreadNotification(this.userId)
        .subscribe(total => {
          this.unreadNotification = total;
        });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Enter the Notification Page
   * --------------------------------------------------------------
   * @method clickNotificationTab
   * When user click and enter notification page make total unread notification zero.
   */
  clickNotificationTab() {
    try {
      this.notificationProvider.makeTotalNotificationZero(this.userId)
        .subscribe(success => {
          this.unreadNotification = 0;
        });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Lifecycle hook that is called to destroyed all events.
   */
  ngDestroy() {
    this.subscription.unsubscribe();
  }
}
