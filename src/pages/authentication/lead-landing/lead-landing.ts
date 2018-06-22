/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of landing page
 * File path - '../../../../src/pages/authentication/lead-landing/lead-landing'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lead-landing',
  templateUrl: 'lead-landing.html',
})
export class LeadLandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * --------------------------------------------------------------
   * Open Sign Up Page
   * --------------------------------------------------------------
   */
  gotoSignUpPage() {
    this.navCtrl.setRoot('SignUpPage');
  }

  /**
   * --------------------------------------------------------------
   * Open Sign In Page
   * --------------------------------------------------------------
   */
  gotoSignInPage() {
    this.navCtrl.setRoot('SignInPage');
  }

}
