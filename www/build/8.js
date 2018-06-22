webpackJsonp([8],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    return SignUpPageModule;
}());
SignUpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]
        ]
    })
], SignUpPageModule);

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a validation of Email Address
 * File path - '../../../src/validators/email.validator'
 */
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.validator.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordMatchValidator; });
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a validation of Password
 * File path - '../../../src/validators/password-match.validator'
 */
var PasswordMatchValidator = (function () {
    function PasswordMatchValidator() {
    }
    PasswordMatchValidator.matchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
        };
    };
    return PasswordMatchValidator;
}());

//# sourceMappingURL=password-match.validator.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_password_match_validator__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__ = __webpack_require__(164);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of SignUp module
 * File path - '../../../../src/pages/authentication/signup/signup'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Imports Modules */



// Import Validators


// Import Providers


var SignUpPage = (function () {
    function SignUpPage(navCtrl, formBuilder, auth, modalCtrl, utilsProvider) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.utilsProvider = utilsProvider;
        this.user = {};
    }
    /**
     * Do any initialization
     */
    SignUpPage.prototype.ngOnInit = function () {
        this.formValidation();
    };
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
    SignUpPage.prototype.formValidation = function () {
        this.signupForm = this.formBuilder.group({
            displayName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        }, {
            // Valiator - Match the password with confirm password
            validator: __WEBPACK_IMPORTED_MODULE_4__validators_password_match_validator__["a" /* PasswordMatchValidator */].matchingPasswords('password', 'confirmPassword')
        });
    };
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
    SignUpPage.prototype.signup = function () {
        var _this = this;
        try {
            // Assign Signup form data to `user` object
            this.user = this.signupForm;
            // Open a confirm popup box to make sure that user want to share their location
            this.utilsProvider.showConfirm('Location', 'Do you want to share location with your friends??')
                .then(function (res) {
                // When users are reluctant to share the location
                if (res === 'no') {
                    _this.user.isShareLocation = false;
                    _this.createUserAccount();
                }
                else if (res === 'yes') {
                    _this.openShareLocationPage();
                }
            });
        }
        catch (err) {
            this.utilsProvider.hideLoading();
            this.error = err;
        }
    };
    /**
     * --------------------------------------------------------------
     * Create User Account
     * --------------------------------------------------------------
     * @method createUserAccount
     */
    SignUpPage.prototype.createUserAccount = function () {
        var _this = this;
        this.utilsProvider.presentLoading();
        this.auth.registration(this.user).subscribe(function (registerData) {
            _this.user = {};
            _this.utilsProvider.hideLoading();
            _this.navCtrl.setRoot('HomePage');
        }, function (err) {
            _this.utilsProvider.hideLoading();
            _this.error = err;
        });
    };
    /**
     * --------------------------------------------------------------
     * Open Share Location Page
     * --------------------------------------------------------------
     * @method openShareLocationPage
     */
    SignUpPage.prototype.openShareLocationPage = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ShareLocationPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.user.location = data;
                _this.user.isShareLocation = true;
                _this.createUserAccount();
            }
            else {
                _this.user.isShareLocation = false;
                _this.createUserAccount();
            }
        });
        modal.present();
    };
    /**
     * --------------------------------------------------------------
     * Open Sign In Page
     * --------------------------------------------------------------
     */
    SignUpPage.prototype.gotoSignInPage = function () {
        this.navCtrl.setRoot('SignInPage');
    };
    /**
     * --------------------------------------------------------------
     * Open Landing Page
     * --------------------------------------------------------------
     */
    SignUpPage.prototype.gotoLandingPage = function () {
        this.navCtrl.setRoot('LeadLandingPage');
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\authentication\sign-up\sign-up.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Signup Page Contents -->\n\n<ion-content class="signup-body-content" padding>\n\n  <ion-row class="logo-row">\n    <ion-col>\n      <img src="https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ionicbucket-socialapp/project-resource/socialapp-logo.png" />\n    </ion-col>\n  </ion-row>\n\n  <div class="signup-box">\n    <p class="title">Sign Up</p>\n    <form [formGroup]="signupForm" novalidate>\n      <ion-row>\n        <ion-col>\n          <!-- Display Error Messages -->\n          <div class="error-message" *ngIf="error">\n            <p>{{error}}</p>\n          </div>\n          <ion-list inset>\n\n            <!-- User Name -->\n            <ion-item>\n              <ion-label>\n                <ion-icon color="default" name="md-person"></ion-icon>\n              </ion-label>\n              <ion-input formControlName="displayName" type="text" class="ion-ios-locked-outline" placeholder="Your Display Name" [(ngModel)]="signupForm.displayName"\n                [class.invalid]="!signupForm.controls.displayName.valid && signupForm.controls.displayName.dirty">\n              </ion-input>\n            </ion-item>\n\n            <!-- Display error messages for display name -->\n            <div class="error-message" *ngIf="!signupForm.controls.displayName.valid  && signupForm.controls.displayName.dirty">\n              <p>Please enter a displayName.</p>\n            </div>\n\n            <!-- Email -->\n            <ion-item>\n              <ion-label>\n                <ion-icon color="default" name="md-mail"></ion-icon>\n              </ion-label>\n              <ion-input formControlName="email" type="email" class="ion-ios-locked-outline" placeholder="Your email address" [(ngModel)]="signupForm.email"\n                [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n              </ion-input>\n            </ion-item>\n\n            <!-- Display error messages for email -->\n            <div class="error-message" *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n              <p>Please enter a valid email.</p>\n            </div>\n\n            <!-- Password -->\n            <ion-item>\n              <ion-label>\n                <ion-icon color="default" name="md-eye"></ion-icon>\n              </ion-label>\n              <ion-input formControlName="password" type="password" class="ion-ios-locked-outline" placeholder="Your password" [(ngModel)]="signupForm.password"\n                [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n              </ion-input>\n            </ion-item>\n\n            <!-- Display error messages for password -->\n            <div class="error-message" *ngIf="!signupForm.controls.password.valid  && signupForm.controls.password.dirty">\n              <p>Your password needs more than 6 characters.</p>\n            </div>\n\n            <!-- Confirm Password -->\n            <ion-item>\n              <ion-label>\n                <ion-icon color="default" name="md-eye"></ion-icon>\n              </ion-label>\n              <ion-input formControlName="confirmPassword" type="password" class="ion-ios-locked-outline" placeholder="Confirm Password"\n                name="confirmPassword" [class.invalid]="!signupForm.controls.confirmPassword.valid && signupForm.controls.confirmPassword.dirty">\n              </ion-input>\n            </ion-item>\n\n            <!-- Display error messages for confirm password -->\n            <div class="error-message" *ngIf="!signupForm.controls.confirmPassword.valid  && signupForm.controls.confirmPassword.dirty">\n              <p>Password mismatch.</p>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button full color="default" (click)="signup()" [disabled]="!signupForm.valid">Sign Up</button>\n          <button ion-button block clear color="light" (click)="gotoSignInPage()">Ready have an account?  Sign In</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button full clear color="dark" (click)="gotoLandingPage()">Back</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\authentication\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["a" /* UtilsProvider */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=8.js.map