/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of SignUp module
 * File path - '../../../../src/pages/authentication/signup/signup'
 */

/** Imports Modules */
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user'; // User Model

// Import Validators
import { EmailValidator } from '../../../validators/email.validator';
import { PasswordMatchValidator } from '../../../validators/password-match.validator';

// Import Providers
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { UtilsProvider } from '../../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  private user = {} as User;
  public error: any;
  private signupForm: any;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private auth: AuthenticationProvider,
    private modalCtrl: ModalController,
    private utilsProvider: UtilsProvider
  ) { }

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
   * @method   formValidation    This function build a SignUp form with validation
   * 
   * `displayName` - Check required option
   * `email` - Check two validation 1. Required Option 2. Verify Email Address
   * `password` - Check two validation 1. Required Option 2. Minimum length of password
   * `confirmPassword` - Check two validation 1. Required Option 2. Minimum length of password
   */
  formValidation() {
    this.signupForm = this.formBuilder.group(
      {
        displayName: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        confirmPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      },
      {
        // Valiator - Match the password with confirm password
        validator: PasswordMatchValidator.matchingPasswords('password', 'confirmPassword')
      }
    );
  }

  /**
   * --------------------------------------------------------------
   * User Signup
   * --------------------------------------------------------------
   * @method signup
   * Before create a new user account a popup box will be open where user can decide
   * whether user is willing to share their location or not.
   * 
   * If user choose 'NO' then user location status will be false for contacts and friends
   * and 'YES' option location status will be public for all contacts.
   * 
   * After taking the decision a new user account will be open by calling this `createUserAccount()` function.
   * 
   */
  signup() {
    try {
      // Assign Signup form data to `user` object
      this.user = this.signupForm;

      // Open a confirm popup box to make sure that user want to share their location
      this.utilsProvider.showConfirm('Location', 'Do you want to share location with your friends??')
        .then((res) => {
          // When users are reluctant to share the location
          if (res === 'no') {
            this.user.isShareLocation = false;
            this.createUserAccount();
          }
          // When the user is willing to share the location
          else if (res === 'yes') {
            this.openShareLocationPage();
          }
        });
    }
    catch (err) {
      this.utilsProvider.hideLoading();
      this.error = err;
    }
  }

  /**
   * --------------------------------------------------------------
   * Create User Account
   * --------------------------------------------------------------
   * @method createUserAccount
   */
  createUserAccount() {
    this.utilsProvider.presentLoading();
    this.auth.registration(this.user).subscribe(registerData => {
      this.user = {};
      this.utilsProvider.hideLoading();
      this.navCtrl.setRoot('HomePage');
    }, err => {
      this.utilsProvider.hideLoading();
      this.error = err;
    });
  }

  /**
   * --------------------------------------------------------------
   * Open Share Location Page
   * --------------------------------------------------------------
   * @method openShareLocationPage
   */
  openShareLocationPage() {
    const modal = this.modalCtrl.create('ShareLocationPage');
    modal.onDidDismiss(data => {
      if (data) {
        this.user.location = data;
        this.user.isShareLocation = true;
        this.createUserAccount();
      } else {
        this.user.isShareLocation = false;
        this.createUserAccount();
      }
    });
    modal.present();
  }

  /**
   * --------------------------------------------------------------
   * Open Sign In Page
   * --------------------------------------------------------------
   */
  gotoSignInPage() {
    this.navCtrl.setRoot('SignInPage');
  }

  /**
   * --------------------------------------------------------------
   * Open Landing Page
   * --------------------------------------------------------------
   */
  gotoLandingPage() {
    this.navCtrl.setRoot('LeadLandingPage');
  }
}
