/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of sharelocation module
 * File path - '../../../src/pages/share-location/share-location'
 */

import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { FriendsLocationMapProvider } from '../../providers/friends-location-map/friends-location-map';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-share-location',
  templateUrl: 'share-location.html',
})

export class ShareLocationPage {

  location: any; // User Current Location Data

  constructor(
    public viewCtrl: ViewController,
    private utilsProvider: UtilsProvider,
    private locationProvider: FriendsLocationMapProvider) { }

  /**
   * --------------------------------------------------------------
   * Get Current Location
   * --------------------------------------------------------------
   * @method getCurrentLocation
   */
  getCurrentLocation() {
    this.utilsProvider.presentLoading();
    this.locationProvider.getCurrentLocation().subscribe((data) => {
      this.location = data;
      this.utilsProvider.hideLoading();
      this.dismiss();
    })
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss(this.location);
  }
}
