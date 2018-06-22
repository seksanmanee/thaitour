/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of user public profile
 * File path - '../../../src/pages/user-public-profile/user-public-profile'
 */

import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-public-profile',
  templateUrl: 'user-public-profile.html',
})
export class UserPublicProfilePage {
  constructor(private viewCtrl: ViewController) { }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
