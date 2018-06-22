/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of user edit profile page
 * File path - '../../../src/pages/edit-profile/edit-profile'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';
import { ImageProvider } from '../../providers/image/image';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  private user = {} as User; // User Object
  userNewImage: any; // New profile picture

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private imageProvider: ImageProvider,
    private utilsProvider: UtilsProvider) { }

  /***
   * Do any initialization
   */
  ngOnInit() {
    this.getNavParamsData();
  }

  /**
   * --------------------------------------------------------------
   * Get & Set data from navParams
   * --------------------------------------------------------------
   */
  async getNavParamsData() {
    if (this.navParams.get('userInfo')) {
      this.user = this.navParams.get('userInfo');
    }
  }

  /**
   * --------------------------------------------------------------
   * Chage and Update Profile Photo
   * --------------------------------------------------------------
   * @method changeProfilePhoto()
   * 
   * This function call `this.imageProvider.openGallery` method by passing user id and
   * request type. and the returning value will be assign by `this.userNewImage` variable
   * as a new profile updated photo.
   * 
   */
  changeProfilePhoto() {
    try {
      this.imageProvider.openGallery(this.user.uid, 'profile').then((success: any) => {
        this.userNewImage = success;
        this.user.image = this.userNewImage;
        this.utilsProvider.hideLoading();
      }).catch(err => {
        this.utilsProvider.hideLoading();
      });
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Update User Profile Photo
   * --------------------------------------------------------------
   * @method updateProfilePhoto()
   */
  async updateProfilePhoto() {
    try {
      await this.userProvider.updateProfileImage(this.user)
        .then(success => {
          this.userNewImage = '';
          this.utilsProvider.presentToast('Your profile photo successfully updated!', 3000, 'bottom');
        });
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * --------------------------------------------------------------
   * Update User Information
   * --------------------------------------------------------------
   * @method updateUserInfo
   * This function call `this.userProvider.updateUserData` method to update user own profile
   * information. Then call `this.userProvider.updateUserName` method to update user profile name
   * with references location of database.
   */
  async updateUserInfo() {
    try {
      this.userProvider.updateUserData(this.user);
      if (this.user.name) {
        this.userProvider.updateUserName(this.user).then(success => {
          this.utilsProvider.presentToast('Your profile successfully updated!', 3000, 'bottom');
        }).catch(err => {
          console.log(err)
        });
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
