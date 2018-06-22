/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of settings page
 * File path - '../../../src/pages/settings/settings'
 */

import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { FriendsLocationMapProvider } from '../../providers/friends-location-map/friends-location-map';
import { StorageProvider } from '../../providers/utils/storage';
import { UtilsProvider } from '../../providers/utils/utils';
import { SharedProvider } from '../../providers/shared/shared';
import { AdmobFreeProvider } from '../../providers/admob-free/admob-free';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  private userInfo: any;
  userId: any; // Current user Id
  isShareLocation: Boolean;

  constructor(
    private viewCtrl: ViewController,
    private modalCtrl: ModalController,
    private auth: AuthenticationProvider,
    public locationProvider: FriendsLocationMapProvider,
    private storageProvider: StorageProvider,
    private utilsProvider: UtilsProvider,
    private sharedProvider: SharedProvider,
    private admobFree: AdmobFreeProvider) { }

  /**
   * Do any initialization
   */
  ngOnInit() {
    this.loadStorageData().then(() => {
      this.getUserInfos();
      this.prepareBanner(); // Show banner ad
      this.prepareInterstitial(); // Show Interstitial add
    });
  }

  /**
   * --------------------------------------------------------------
   * Get Localstorage User ID
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
   * Get User Information
   * --------------------------------------------------------------
   * @method getUserInfos
   * This function get user current information from the database.
   */
  getUserInfos() {
    this.sharedProvider.getUserInfoByUserId(this.userId)
      .then((userInfo: any) => {
        this.userInfo = userInfo;
        this.isShareLocation = userInfo.isShareLocation; // User Location Status
      }).catch(err => {
        console.log(err);
      })
  }

  /**
   * --------------------------------------------------------------
   * Open Edit Profile Page
   * --------------------------------------------------------------
   * @method gotoEditProfile
   */
  gotoEditProfile() {
    // Create a modal to open edit profile page
    this.modalCtrl.create('EditProfilePage', { userInfo: this.userInfo }).present();
  }

  /**
   * --------------------------------------------------------------
   * Open Email Change Page
   * --------------------------------------------------------------
   * @method gotoEmailChangePage
   */
  gotoEmailChangePage() {
    // Create a modal to open email change page
    this.modalCtrl.create('EmailChangePage').present();
  }

  /**
   * --------------------------------------------------------------
   * Open Password Change Page
   * --------------------------------------------------------------
   * @method gotoPasswordChangePage
   */
  gotoPasswordChangePage() {
    // Create a modal to open password change page
    this.modalCtrl.create('PasswordChangePage').present();
  }

  /**
   * --------------------------------------------------------------
   * Update User `Location of Share` Information
   * --------------------------------------------------------------
   * 
   * @method updateShareLocation
   * 
   * This function open front of user a confirm popup box, after click 'yes' option
   * this call a location provider method updateShareLocation() by pass user current Id and
   * current status of `this.isShareLocation`.
   */
  updateShareLocation() {
    // Make a Object of Confirm Popup Box
    let object = {
      title: 'Location Status',
      message: `Are you sure? Do you want to make your location ${this.isShareLocation === true ? 'Private' : 'Public'}?`
    }

    // Open a confirm box by calling utils provider
    this.utilsProvider.showConfirm(object.title, object.message).then((data) => {
      if (data === 'yes') {
        // reversed `this.isShareLocation` option value
        this.isShareLocation = !this.isShareLocation;

        // Call location provider method updateShareLocation() by passing userId and isShareLocation
        this.locationProvider.updateShareLocation(this.userId, this.isShareLocation).then((success) => {
          this.utilsProvider.presentToast('Your location has been changed successfully.', 3000, 'top');
        }).catch(error => {
          this.utilsProvider.presentToast('Sorry! Failed to change the location.', 3000, 'top');
        });
      }
    }).catch(err => {
      console.log(err);
    })
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
   * --------------------------------------------------------------
   * Logout
   * --------------------------------------------------------------
   * 
   * @method logout 
   * 
   * By Calling `this.authProvider.logout` method It's logout the user account.
   */
  logout() {
    this.viewCtrl.dismiss();
    this.auth.logout();
  }

  /**
   * --------------------------------------------------------------
   * Dismiss
   * --------------------------------------------------------------
   * @method dismiss    This function dismiss the open popup modal
   */
  dismiss() {
    this.removeBanner();
    this.viewCtrl.dismiss();
  }

}
