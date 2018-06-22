/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of signin module
 * File path - '../../../../src/pages/authentication/signin/signin'
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { UtilsProvider } from '../../../providers/utils/utils';
import { EmailValidator } from '../../../validators/email.validator'; // Email Validator
import { User } from '../../../models/user'; // User Module

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  private signinForm: any;
  public error: any;
  private user = {} as User;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authProvider: AuthenticationProvider,
    private utilsProvider: UtilsProvider,
    public modalCtrl: ModalController) {
    this.navCtrl = navCtrl;
  }

  /** Do any initialization */
  ngOnInit() {
    this.formValidation();
  }

  /***
   * --------------------------------------------------------------
   * Form Validation
   * --------------------------------------------------------------
   * @method    formValidation    This function build a SignIn form with validation
   * 
   * `email` - Check two validation 1. Required Option 2. Verify Email Address
   * `password` - Check two validation 1. Required Option
   */
  formValidation() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  /**
   * --------------------------------------------------------------
   * Login with Email Address
   * --------------------------------------------------------------
   * @method submitSigninForm
   */
  async submitSigninForm() {
    try {

      this.utilsProvider.presentLoading();
      this.user = this.signinForm;
      const email: string = this.user.email;
      const password: string = this.user.password;

      await this.authProvider.loginWithEmail(email, password).subscribe(loginData => {
        this.utilsProvider.hideLoading();
        this.navCtrl.setRoot('HomePage');
      }, loginError => {
        this.utilsProvider.hideLoading();
        this.error = loginError;
      });
    }
    catch (err) {
      this.utilsProvider.hideLoading();
      this.error = err;
    }
  }

  /**
   * --------------------------------------------------------------
   * login with Facebook
   * --------------------------------------------------------------
   * @method loginUserWithFacebook
   */
  async loginUserWithFacebook() {
    try {
      this.utilsProvider.presentLoading();
      await this.authProvider.loginWithFacebook().subscribe(data => {
        this.utilsProvider.hideLoading();
        this.navCtrl.setRoot('HomePage');
      }, err => {
        this.utilsProvider.hideLoading();
        this.error = err;
      });

    } catch (err) {
      this.error = err;
      this.utilsProvider.hideLoading();
    }
  }

  /**
   * --------------------------------------------------------------
   * Open Forget Password Page
   * --------------------------------------------------------------
   */
  openForgotPasswordPage() {
    this.modalCtrl.create('ForgetPasswordPage').present();
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
   * Open Landing Page
   * --------------------------------------------------------------
   */
  gotoLandingPage() {
    this.navCtrl.setRoot('LeadLandingPage');
  }
}
