/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of change user password 
 * File path - '../../../src/pages/password-change/password-change'
 */

import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordMatchValidator } from '../../validators/password-match.validator';
import { UtilsProvider } from '../../providers/utils/utils';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-password-change',
  templateUrl: 'password-change.html',
})
export class PasswordChangePage {

  private passwordForm: any;

  constructor(
    private viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private utilsProvider: UtilsProvider,
    private authProvider: AuthenticationProvider) { }

  /**
   * Do any initialization
   */
  ngOnInit() {
    this.formValidation();
  }

  /***
   * --------------------------------------------------------------
   * Form Validation
   * --------------------------------------------------------------
   * @method formValidation
   * This function build a form of password change with validation
   * Creating three input fields in this form
   * 1. currentPassword    - User Current password
   * 2. newPassword        - User New Password
   * 3. repeatPassword     - Repeat password
   */
  formValidation() {
    this.passwordForm = this.formBuilder.group(
      {
        currentPassword: ['', Validators.compose([Validators.required])],
        newPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        repeatPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      },
      {
        validator: PasswordMatchValidator.matchingPasswords('newPassword', 'repeatPassword')
      }
    );
  }

  /**
   * --------------------------------------------------------------
   * Update Password
   * --------------------------------------------------------------
   * @method updatePassword
   * 
   * This function call a authentication provider `updatePassword` by passing two params to update
   * user password
   */
  async updatePassword() {
    try {
      this.utilsProvider.presentLoading();
      await this.authProvider.updatePassword(this.passwordForm.currentPassword, this.passwordForm.newPassword)
        .then((res) => {
          this.utilsProvider.hideLoading();
          this.utilsProvider.basicAlert('Success', 'Your Password Change Successfully').then(() => {
            this.viewCtrl.dismiss();
          });
        }, err => {
          this.utilsProvider.hideLoading();
          this.utilsProvider.basicAlert('Error', err.message);
        });
    }
    catch (err) {
      this.utilsProvider.hideLoading();
      this.utilsProvider.basicAlert('Error', err);
    }
  }

  /**
   * --------------------------------------------------------------
   * Dismiss
   * --------------------------------------------------------------
   * @method dismiss    This function dismiss the open popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
