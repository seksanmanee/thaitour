webpackJsonp([18],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsLocationListPageModule", function() { return FriendsLocationListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends_location_list__ = __webpack_require__(915);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendsLocationListPageModule = (function () {
    function FriendsLocationListPageModule() {
    }
    return FriendsLocationListPageModule;
}());
FriendsLocationListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__friends_location_list__["a" /* FriendsLocationListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friends_location_list__["a" /* FriendsLocationListPage */]),
        ],
    })
], FriendsLocationListPageModule);

//# sourceMappingURL=friends-location-list.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsLocationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component list of Friends Location
 * File path - '../../../src/pages/friends-location-list/friends-location-list'
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


var FriendsLocationListPage = (function () {
    function FriendsLocationListPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.friendList = [];
        this.friendList = this.navParams.get('friendList');
    }
    /**
     * --------------------------------------------------------------
     * Direction
     * --------------------------------------------------------------
     * This funtion helps to open direction between two user
     * @param location
     */
    FriendsLocationListPage.prototype.showDirection = function (location) {
        this.viewCtrl.dismiss(location);
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    FriendsLocationListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return FriendsLocationListPage;
}());
FriendsLocationListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends-location-list',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\friends-location-list\friends-location-list.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n\n  ** List of Friend Location\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Friends Location</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- Display list of user locations data -->\n    <ion-item *ngFor="let list of friendList">\n\n      <!-- User profile picture -->\n      <ion-avatar item-start>\n        <img [src]="list.userImage">\n      </ion-avatar>\n\n      <!-- User profile name -->\n      <h2>{{list.userName}}</h2>\n\n      <!-- User curent address -->\n      <p text-wrap>{{list.address}}</p>\n\n      <!-- User direction -->\n      <button ion-button round icon-right (click)="showDirection(list)">\n        Get Direction <ion-icon name="compass"></ion-icon> \n      </button>\n\n      <!-- Distance -->\n      <ion-badge color="default" item-end>{{list.distance}} miles</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\friends-location-list\friends-location-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], FriendsLocationListPage);

//# sourceMappingURL=friends-location-list.js.map

/***/ })

});
//# sourceMappingURL=18.js.map