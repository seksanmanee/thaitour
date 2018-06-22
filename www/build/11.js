webpackJsonp([11],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(903);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of SignIn page
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = (function () {
    function SignInPageModule() {
    }
    return SignInPageModule;
}());
SignInPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]
        ]
    })
], SignInPageModule);

//# sourceMappingURL=sign-in.module.js.map

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

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email_validator__ = __webpack_require__(895);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of signin module
 * File path - '../../../../src/pages/authentication/signin/signin'
 */





 // Email Validator
var SignInPage = (function () {
    function SignInPage(navCtrl, formBuilder, authProvider, utilsProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.utilsProvider = utilsProvider;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.navCtrl = navCtrl;
    }
    /** Do any initialization */
    SignInPage.prototype.ngOnInit = function () {
        this.formValidation();
    };
    /***
     * --------------------------------------------------------------
     * Form Validation
     * --------------------------------------------------------------
     * @method    formValidation    This function build a SignIn form with validation
     *
     * `email` - Check two validation 1. Required Option 2. Verify Email Address
     * `password` - Check two validation 1. Required Option
     */
    SignInPage.prototype.formValidation = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_email_validator__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    };
    /**
     * --------------------------------------------------------------
     * Login with Email Address
     * --------------------------------------------------------------
     * @method submitSigninForm
     */
    SignInPage.prototype.submitSigninForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var email, password, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.utilsProvider.presentLoading();
                        this.user = this.signinForm;
                        email = this.user.email;
                        password = this.user.password;
                        return [4 /*yield*/, this.authProvider.loginWithEmail(email, password).subscribe(function (loginData) {
                                _this.utilsProvider.hideLoading();
                                _this.navCtrl.setRoot('HomePage');
                            }, function (loginError) {
                                _this.utilsProvider.hideLoading();
                                _this.error = loginError;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.utilsProvider.hideLoading();
                        this.error = err_1;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * login with Facebook
     * --------------------------------------------------------------
     * @method loginUserWithFacebook
     */
    SignInPage.prototype.loginUserWithFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.utilsProvider.presentLoading();
                        return [4 /*yield*/, this.authProvider.loginWithFacebook().subscribe(function (data) {
                                _this.utilsProvider.hideLoading();
                                _this.navCtrl.setRoot('HomePage');
                            }, function (err) {
                                _this.utilsProvider.hideLoading();
                                _this.error = err;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        this.error = err_2;
                        this.utilsProvider.hideLoading();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Open Forget Password Page
     * --------------------------------------------------------------
     */
    SignInPage.prototype.openForgotPasswordPage = function () {
        this.modalCtrl.create('ForgetPasswordPage').present();
    };
    /**
     * --------------------------------------------------------------
     * Open Sign Up Page
     * --------------------------------------------------------------
     */
    SignInPage.prototype.gotoSignUpPage = function () {
        this.navCtrl.setRoot('SignUpPage');
    };
    /**
     * --------------------------------------------------------------
     * Open Landing Page
     * --------------------------------------------------------------
     */
    SignInPage.prototype.gotoLandingPage = function () {
        this.navCtrl.setRoot('LeadLandingPage');
    };
    return SignInPage;
}());
SignInPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-in',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\authentication\sign-in\sign-in.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- SignIn Page Contents -->\n\n<ion-content class="signin-body-content" padding>\n  <ion-row class="logo-row">\n    <ion-col>\n      <img src="https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ionicbucket-socialapp/project-resource/socialapp-logo.png" />\n    </ion-col>\n  </ion-row>\n  <div class="signin-box">\n    <p class="title">Sign In</p>\n    <form [formGroup]="signinForm" novalidate>\n      <ion-row>\n        <ion-col>\n          <!-- Display Error Messages -->\n          <div class="error-message" *ngIf="error">\n            <p>{{error}}</p>\n          </div>\n          <ion-list inset>\n            <!-- Email -->\n            <ion-item>\n              <ion-label>\n                <ion-icon color="default" name="md-mail"></ion-icon>\n              </ion-label>\n              <ion-input formControlName="email" type="email" placeholder="Your email address" class="ion-ios-locked-outline" [(ngModel)]="signinForm.email"\n                [class.invalid]="!signinForm.controls.email.valid && signinForm.controls.email.dirty">\n              </ion-input>\n            </ion-item>\n            <div class="error-message" *ngIf="!signinForm.controls.email.valid  && signinForm.controls.email.dirty">\n              <p>Please enter a valid email address.</p>\n            </div>\n\n            <!-- Password -->\n            <ion-item>\n              <ion-label>\n                <ion-icon color="default" name="md-eye"></ion-icon>\n              </ion-label>\n              <ion-input formControlName="password" type="password" placeholder="Your password" class="ion-ios-locked-outline" [(ngModel)]="signinForm.password"\n                [class.invalid]="!signinForm.controls.password.valid && signinForm.controls.password.dirty"></ion-input>\n            </ion-item>\n            <div class="error-message" *ngIf="!signinForm.controls.password.valid  && signinForm.controls.password.dirty">\n              <p>Please Enter Your Password.</p>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signin-col">\n          <!-- Login Button -->\n          <button ion-button type="submit" color="default" block class="btn btn-primary" [disabled]="!signinForm.valid" (click)="submitSigninForm()">Sign In</button>\n\n          <!-- Login With Facebook  -->\n          <button ion-button color="white" clear (click)="loginUserWithFacebook()">\n            <ion-icon name="logo-facebook">  Log in with Facebook </ion-icon>\n          </button>\n\n          <div class="custom">OR</div>\n\n          <!--  Forget Password Button -->\n          <button ion-button color="light" clear (click)="openForgotPasswordPage()">\n            Forget Password\n          </button>\n\n          <!-- Sign Up Button  -->\n          <button ion-button block clear color="light" clear (click)="gotoSignUpPage()">\n            Dont have an account? Sign Up\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n  <ion-row>\n    <ion-col>\n      <button ion-button full clear color="dark" (click)="gotoLandingPage()">Back</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\authentication\sign-in\sign-in.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], SignInPage);

//# sourceMappingURL=sign-in.js.map

/***/ })

});
//# sourceMappingURL=11.js.map