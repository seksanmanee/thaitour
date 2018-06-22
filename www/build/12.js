webpackJsonp([12],{

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareLocationPageModule", function() { return ShareLocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_location__ = __webpack_require__(925);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of share location page
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShareLocationPageModule = (function () {
    function ShareLocationPageModule() {
    }
    return ShareLocationPageModule;
}());
ShareLocationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__share_location__["a" /* ShareLocationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__share_location__["a" /* ShareLocationPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__share_location__["a" /* ShareLocationPage */]
        ]
    })
], ShareLocationPageModule);

//# sourceMappingURL=share-location.module.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_friends_location_map_friends_location_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(164);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of sharelocation module
 * File path - '../../../src/pages/share-location/share-location'
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




var ShareLocationPage = (function () {
    function ShareLocationPage(viewCtrl, utilsProvider, locationProvider) {
        this.viewCtrl = viewCtrl;
        this.utilsProvider = utilsProvider;
        this.locationProvider = locationProvider;
    }
    /**
     * --------------------------------------------------------------
     * Get Current Location
     * --------------------------------------------------------------
     * @method getCurrentLocation
     */
    ShareLocationPage.prototype.getCurrentLocation = function () {
        var _this = this;
        this.utilsProvider.presentLoading();
        this.locationProvider.getCurrentLocation().subscribe(function (data) {
            _this.location = data;
            _this.utilsProvider.hideLoading();
            _this.dismiss();
        });
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    ShareLocationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.location);
    };
    return ShareLocationPage;
}());
ShareLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-share-location',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\share-location\share-location.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Location share page -->\n\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Share Location</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n\n    <ion-row text-center padding-top padding-bottom>\n      <h2 class="header">Share your location with your Friends</h2>\n    </ion-row>\n\n    <ion-row padding-top padding-bottom>\n      <button ion-button full color="default" (click)="getCurrentLocation()">\n        Share Location\n      </button>\n    </ion-row>\n\n    <ion-row text-center padding-top padding-bottom>\n      <h3>How does location sharing work?</h3>\n      <p>Share your location with all your friends. If you and a friend both added each other on IonicBucket, you can choose\n        to share your locations with each other.\n      </p>\n      <p>\n        <b>Your location on the map only updates when you have open IonicBucket.</b> So you don\'t have to worry about your\n        location being updated in the background or anything.\n      </p>\n      <p>And also don\'t worry you can change this location option from Settings.</p>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\share-location\share-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_friends_location_map_friends_location_map__["a" /* FriendsLocationMapProvider */]])
], ShareLocationPage);

//# sourceMappingURL=share-location.js.map

/***/ })

});
//# sourceMappingURL=12.js.map