webpackJsonp([16],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function() { return FriendsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends__ = __webpack_require__(921);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of friend list page
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendsPageModule = (function () {
    function FriendsPageModule() {
    }
    return FriendsPageModule;
}());
FriendsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__friends__["a" /* FriendsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friends__["a" /* FriendsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__friends__["a" /* FriendsPage */]
        ]
    })
], FriendsPageModule);

//# sourceMappingURL=friends.module.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_friends_friends__ = __webpack_require__(93);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of friend list page
 * File path - '../../../src/pages/friends/friends'
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




var FriendsPage = (function () {
    function FriendsPage(navParams, viewCtrl, utilsProvider, friendsProvider, modalCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.utilsProvider = utilsProvider;
        this.friendsProvider = friendsProvider;
        this.modalCtrl = modalCtrl;
        this.friendLists = []; // Array of friend list
        this.newFriendLists = []; // Array of new friend list
    }
    /***
     * --------------------------------------------------------------
     * Lifecycle Event - ionViewDidLoad()
     * --------------------------------------------------------------
     *
     * Fired when the page has loaded
     */
    FriendsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getNavParamsData().then(function () {
            _this.getFriendsList();
        });
    };
    /**
     * --------------------------------------------------------------
     * Get & Set data from navParams
     * --------------------------------------------------------------
     */
    FriendsPage.prototype.getNavParamsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.navParams.get('userId')) {
                    this.userId = this.navParams.get('userId');
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * List of Friends
     * --------------------------------------------------------------
     * @method getFriendsList
     * This function call friends provider `getFriendsList` method by userId
     * and the returning list will assign `this.friendLists` variable.
     */
    FriendsPage.prototype.getFriendsList = function () {
        var _this = this;
        this.utilsProvider.presentLoading();
        this.friendsProvider.getFriendList(this.userId).then(function (data) {
            _this.friendLists = data;
            _this.newFriendLists = _this.friendLists;
            _this.utilsProvider.hideLoading();
        }).catch(function (err) {
            _this.utilsProvider.hideLoading();
        });
    };
    /**
     * --------------------------------------------------------------
     * Search
     * --------------------------------------------------------------
     * @param ev
     */
    FriendsPage.prototype.getSearchResult = function (ev) {
        // Reset items back to all of the items
        this.friendLists = this.newFriendLists;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.friendLists = this.friendLists.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    /**
     * --------------------------------------------------------------
     * Unfriend User
     * --------------------------------------------------------------
     * @method unFriend
     * This function works to unfriend or remove user from user friend list. Call a friends provider
     *  `unFriend` method by two params `this.currentUserId` and `this.user.uid`. here, `this.user.uid`
     * is any user ID would like to unfriend and `this.currentUserId` is current user ID.
     */
    FriendsPage.prototype.unfriend = function (user) {
        var _this = this;
        this.utilsProvider.showConfirm("<img src=\"" + user.image + "\" width=\"80px !important;\">", "Unfriend <b>@" + user.name + "</b>")
            .then(function (ans) {
            if (ans === 'yes') {
                _this.friendsProvider.unFriend(_this.userId, user.uid).then(function (success) {
                    if (success) {
                        user.isFriends = false;
                    }
                });
            }
        });
    };
    /**
     * --------------------------------------------------------------
     * Send Friend Request
     * --------------------------------------------------------------
     * @method sendFriendRequest
     * This function is used to send Friend Requests. Call a friends provider `addFriendRequest` method by
     * two params `this.userId` and `user.uid` here, `user.uid` is any user ID would like to
     * send friend request and `this.userId` is current user ID.
     */
    FriendsPage.prototype.sendFriendRequest = function (user) {
        this.friendsProvider.addFriendRequest(this.userId, user.uid)
            .then(function (success) {
            if (success) {
                user.isFriends = true;
            }
        });
    };
    /**
     * --------------------------------------------------------------
     * Open User Public Profile
     * --------------------------------------------------------------
     * @method gotoUserProfile
     * @param userId
     */
    FriendsPage.prototype.gotoUserProfile = function (userId) {
        this.modalCtrl.create('UserPublicProfilePage', { userId: userId }).present();
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    FriendsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return FriendsPage;
}());
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\friends\friends.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Friend List Page -->\n\n<ion-header no-border>\n\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <!-- Modal close button  -->\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- Page title  -->\n    <ion-title>Friend List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <!-- User Search Option -->\n  <ion-searchbar animated="true" autocomplete="on" (ionInput)="getSearchResult($event)">\n  </ion-searchbar>\n\n  <br>\n\n  <!-- Display Friend List -->\n  <ion-list>\n    <ion-item *ngFor="let user of friendLists; let i = index">\n\n      <!-- User profile image -->\n      <ion-avatar item-start (click)="gotoUserProfile(user.uid)">\n        <img [src]="user.image">\n      </ion-avatar>\n\n      <!-- User profile name -->\n      <h2 (click)="gotoUserProfile(user.uid)">{{ user.name }}</h2>\n\n      <!-- Unfriend -->\n      <button ion-button color="dark" item-right outline *ngIf="user.isFriends" (click)="unfriend(user)">\n        Unfriend\n      </button>\n\n      <!-- Send Friend Request -->\n      <button ion-button color="default" item-right outline *ngIf="!user.isFriends" (click)="sendFriendRequest(user)">\n        Add Friend\n      </button>\n\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\friends\friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_friends_friends__["a" /* FriendsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ })

});
//# sourceMappingURL=16.js.map