/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of change user email 
 * File path - '../../../src/pages/email-change/email-change'
 */

import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email.validator';
import { UtilsProvider } from '../../providers/utils/utils';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-email-change',
  templateUrl: 'email-change.html',
})
export class EmailChangePage {

  private emailForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private utilsProvider: UtilsProvider,
    private viewCtrl: ViewController,
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
   * This function build form of email change with validation
   * Creating three input fields in this form
   * 1. currentEmail    - User Current Email Address
   * 2. password        - User Current Password
   * 3. newEmail        - User New Email Address
   */
  formValidation() {
    this.emailForm = this.formBuilder.group(
      {
        currentEmail: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.required])],
        newEmail: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
      }
    );
  }

  /**
   * --------------------------------------------------------------
   * Update Email Address
   * --------------------------------------------------------------
   * @method updateEmail
   * 
   * This function call a authentication provider `updateEmail` by passing three params to update
   * user email address.
   */
  async updateEmail() {
    try {
      this.utilsProvider.presentLoading(); // Start loading
      await this.authProvider.updateEmail(this.emailForm.currentEmail, this.emailForm.password, this.emailForm.newEmail)
        .then((res) => {
          this.utilsProvider.hideLoading(); // Hide loading
          this.utilsProvider.basicAlert('Success', 'Your Email Address Change Successfully').then(() => {
            this.viewCtrl.dismiss();
          });
        }, err => {
          this.utilsProvider.hideLoading(); // Hide loading
          this.utilsProvider.basicAlert('Error', err.message);
        });
    }
    catch (err) {
      this.utilsProvider.hideLoading(); // Hide loading
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
