/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of profile
 * File path - '../../../src/pages/profile/profile'
 */

import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public modalCtrl: ModalController,
    private navController: NavController) { }

  /**
   * Goto suggested user page
   * @method gotoDiscoverPeople()
   * 
   * this function create a modal of  discover people page
   */
  gotoDiscoverPeople() {
    const modal = this.modalCtrl.create('DiscoverPeoplePage');
    modal.present();
  }

  /**
   * Goto settings page
   * @method gotoSettingsPage()
   * 
   * this function create a modal of settings page
   */
  gotoSettingsPage() {
    const modal = this.modalCtrl.create('SettingsPage');
    modal.present();
  }

  /**
   * Refresh profile page
   */
  refresh() {
    this.navController.setRoot('ProfilePage');
  }
}
