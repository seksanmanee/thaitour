/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component list of Friends Location
 * File path - '../../../src/pages/friends-location-list/friends-location-list'
 */

import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-friends-location-list',
  templateUrl: 'friends-location-list.html',
})
export class FriendsLocationListPage {
  friendList: any = [];
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.friendList = this.navParams.get('friendList');
  }

  /**
   * --------------------------------------------------------------
   * Direction
   * --------------------------------------------------------------
   * This funtion helps to open direction between two user
   * @param location 
   */
  showDirection(location) {
    this.viewCtrl.dismiss(location);
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
