/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of forget password module
 * File path - '../../../../src/pages/authentication/forget-password/forget-password'
 */

import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { UtilsProvider } from '../../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})

export class ForgetPasswordPage {

  errorMsg: any; // Error Message
  form: any;

  constructor(private viewCtrl: ViewController,
    private utilsProvider: UtilsProvider,
    private authProvider: AuthenticationProvider
  ) {

    // Assign form input fields
    this.form = {
      email: ''
    }
  }

  /**
   * --------------------------------------------------------------
   * Password Reset Request
   * --------------------------------------------------------------
   * @method passwordResetRequest
   */
  async passwordResetRequest() {
    try {
      this.utilsProvider.presentLoading();
      await this.authProvider.sendPasswordResetEmail(this.form.email)
        .subscribe(data => {
          this.utilsProvider.basicAlert('Change your password!', 'You should receive an email within a few minutes. This email contains a link to help you reset your password.');
          this.errorMsg = '';
          this.utilsProvider.hideLoading();
        }, err => {
          this.errorMsg = err;
          this.utilsProvider.hideLoading();
        });
    } catch (err) {
      this.errorMsg = err;
      this.utilsProvider.hideLoading();
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
