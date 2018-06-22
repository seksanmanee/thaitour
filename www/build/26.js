webpackJsonp([26],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadLandingPageModule", function() { return LeadLandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_landing__ = __webpack_require__(901);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeadLandingPageModule = (function () {
    function LeadLandingPageModule() {
    }
    return LeadLandingPageModule;
}());
LeadLandingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lead_landing__["a" /* LeadLandingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lead_landing__["a" /* LeadLandingPage */]),
        ],
    })
], LeadLandingPageModule);

//# sourceMappingURL=lead-landing.module.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadLandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of landing page
 * File path - '../../../../src/pages/authentication/lead-landing/lead-landing'
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


var LeadLandingPage = (function () {
    function LeadLandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    /**
     * --------------------------------------------------------------
     * Open Sign Up Page
     * --------------------------------------------------------------
     */
    LeadLandingPage.prototype.gotoSignUpPage = function () {
        this.navCtrl.setRoot('SignUpPage');
    };
    /**
     * --------------------------------------------------------------
     * Open Sign In Page
     * --------------------------------------------------------------
     */
    LeadLandingPage.prototype.gotoSignInPage = function () {
        this.navCtrl.setRoot('SignInPage');
    };
    return LeadLandingPage;
}());
LeadLandingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lead-landing',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\authentication\lead-landing\lead-landing.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Landing Page-->\n\n<ion-content>\n\n  <ion-slides pager>\n\n    <ion-slide class="slider0">\n      <img src="https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ionicbucket-socialapp/project-resource/socialapp-logo.png">\n\n      <p>The Best World Class Fully Functional Social App Like Instagram That Will Help To Make Your Dream Apps With Support\n        Any Platform</p>\n\n      <button ion-button color="white" block class="btn btn-primary" (click)="gotoSignUpPage()">\n        Getting Started\n      </button>\n\n      <button ion-button color="white" clear class="btn btn-primary" (click)="gotoSignInPage()">\n        Ready have an account?  Sign In\n      </button>\n    </ion-slide>\n\n    <ion-slide class="slider1">\n\n      <h2>Discover Map</h2>\n      <h4>Discover map is fun way to explore your surroundings</h4>\n\n      <img src="https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/socialapp/social-map.png">\n\n      <button ion-button color="white" block class="btn btn-primary" (click)="gotoSignUpPage()">\n        Getting Started\n      </button>\n\n      <button ion-button color="white" clear class="btn btn-primary" (click)="gotoSignInPage()">\n        Ready have an account?  Sign In\n      </button>\n    </ion-slide>\n\n    <ion-slide class="slider2">\n\n      <h2>Friends Connection</h2>\n      <h4>Stay Connected with thousands of people around the world</h4>\n\n      <img src="https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/socialapp/social-connection.png">\n\n      <button ion-button color="white" block class="btn btn-primary" (click)="gotoSignUpPage()">\n        Getting Started\n      </button>\n\n      <button ion-button color="white" clear class="btn btn-primary" (click)="gotoSignInPage()">\n        Ready have an account?  Sign In\n      </button>\n\n    </ion-slide>\n\n    <ion-slide class="slider3">\n      <h2>Like, Comment, Share</h2>\n      <h4>Inform others that you are here! Keep on liking, Commenting and Sharing</h4>\n\n      <img src="https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/socialapp/social-like.png">\n\n      <button ion-button color="white" block class="btn btn-primary" (click)="gotoSignUpPage()">\n        Getting Started\n      </button>\n\n      <button ion-button color="white" clear class="btn btn-primary" (click)="gotoSignInPage()">\n        Ready have an account?  Sign In\n      </button>\n    </ion-slide>\n\n\n    <ion-slide class="slider4">\n\n      <h2>One to One Chatting</h2>\n      <h4>Just say Hi, create an amazing relation with your friends and family</h4>\n\n      <img src="https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/socialapp/social-chat.png">\n\n      <button ion-button color="white" block class="btn btn-primary" (click)="gotoSignUpPage()">\n        Getting Started\n      </button>\n\n      <button ion-button color="white" clear class="btn btn-primary" (click)="gotoSignInPage()">\n        Ready have an account?  Sign In\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\authentication\lead-landing\lead-landing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], LeadLandingPage);

//# sourceMappingURL=lead-landing.js.map

/***/ })

});
//# sourceMappingURL=26.js.map