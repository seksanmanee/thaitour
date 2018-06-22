webpackJsonp([20],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingPageModule", function() { return FollowingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__following__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of following page
 */



var FollowingPageModule = (function () {
    function FollowingPageModule() {
    }
    return FollowingPageModule;
}());
FollowingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__following__["a" /* FollowingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__following__["a" /* FollowingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__following__["a" /* FollowingPage */]
        ]
    })
], FollowingPageModule);

//# sourceMappingURL=following.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connections_connections__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared__ = __webpack_require__(32);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of following page
 * File path - '../../../src/pages/following/following'
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





var FollowingPage = (function () {
    function FollowingPage(navParams, viewCtrl, connectionsProvider, utilsProvider, sharedProvider, modalCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.connectionsProvider = connectionsProvider;
        this.utilsProvider = utilsProvider;
        this.sharedProvider = sharedProvider;
        this.modalCtrl = modalCtrl;
        this.followingLists = []; // Array of following list
        this.newFollowingList = []; // Array of new following list
    }
    /***
     * --------------------------------------------------------------
     * Lifecycle Event - ionViewDidLoad()
     * --------------------------------------------------------------
     *
     * Fired when the page has loaded
     */
    FollowingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getNavParamsData().then(function () {
            _this.getFollowingUsers();
        });
    };
    /**
     * --------------------------------------------------------------
     * Get & Set data from navParams
     * --------------------------------------------------------------
     */
    FollowingPage.prototype.getNavParamsData = function () {
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
     * List of Following User
     * --------------------------------------------------------------
     * @method getFollowingUsers
     *
     * This function call connection provider `getFollowingUsers` method by userId
     * and the returning list will assign `this.followingLists` variable list of following
     * user's.
     */
    FollowingPage.prototype.getFollowingUsers = function () {
        var _this = this;
        this.utilsProvider.presentLoading(); // Start loading
        this.connectionsProvider.getFollowingUsers(this.userId)
            .then(function (data) {
            _this.followingLists = data;
            _this.newFollowingList = _this.followingLists;
            _this.utilsProvider.hideLoading(); // Hide loading
        }).catch(function (err) {
            _this.utilsProvider.hideLoading(); // Hide loading
        });
    };
    /**
     * --------------------------------------------------------------
     * Open User Public Profile
     * --------------------------------------------------------------
     * @method gotoUserProfile
     * @param userId
     */
    FollowingPage.prototype.gotoUserProfile = function (userId) {
        this.modalCtrl.create('UserPublicProfilePage', { userId: userId }).present();
    };
    /**
     * --------------------------------------------------------------
     * Search
     * --------------------------------------------------------------
     * @param ev
     */
    FollowingPage.prototype.getSearchResult = function (ev) {
        // Reset items back to all of the items
        this.followingLists = this.newFollowingList;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.followingLists = this.followingLists.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    /**
     * --------------------------------------------------------------
     * Unfollow User
     * --------------------------------------------------------------
     * @method unFollow
     * This function works to unfollow user. Open a confirmation box to ensure that the user
     * really wants to unfollow and call a shared provider `unfollowUser` method by passing
     * two params `this.userId` and `user.uid` here, `user.uid` is any user ID would like to
     * unfollow and `this.userId` is current user ID.
     *
     */
    FollowingPage.prototype.unFollow = function (user) {
        var _this = this;
        this.utilsProvider.showConfirm("<img src=\"" + user.image + "\" width=\"80px !important;\">", "Unfollow <b>@" + user.name + "</b>")
            .then(function (ans) {
            if (ans === 'yes') {
                _this.sharedProvider.unfollowUser(_this.userId, user.uid).then(function (success) {
                    user.isFollowing = false;
                });
            }
        });
    };
    /**
     * --------------------------------------------------------------
     * Follow User
     * --------------------------------------------------------------
     * @method follow
     * This function works to follow the user and call a connection provider `followUser` method by passing
     * two params `user.uid` and `this.userId`. here, `user.uid` is any user ID would like to
     * follow and `this.userId` is current user ID.
     *
     */
    FollowingPage.prototype.follow = function (user) {
        this.connectionsProvider.followUser(user.uid, this.userId).then(function (success) {
            success.subscribe(function () {
                user.isFollowing = true;
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    FollowingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return FollowingPage;
}());
FollowingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-following',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\following\following.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Following Page -->\n\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Following</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--\n    -  ** Search Option **\n    -  The below search box will help to find out the particular user from the following user\'s list\n  -->\n  <ion-searchbar animated="true" autocomplete="on" (ionInput)="getSearchResult($event)">\n  </ion-searchbar>\n\n  <br>\n\n  <!-- Display following user\'s list -->\n  <ion-list>\n    <ion-item *ngFor="let user of followingLists; let i = index">\n\n      <!-- User profile picture -->\n      <ion-avatar item-start (click)="gotoUserProfile(user.uid)">\n        <img [src]="user.image">\n      </ion-avatar>\n\n      <!-- User profile name -->\n      <h2 (click)="gotoUserProfile(user.uid)">{{ user.name }}</h2>\n\n      <!-- Unfollow button -->\n      <button ion-button color="dark" item-right outline *ngIf="user.isFollowing" (click)="unFollow(user)">\n        Following\n      </button>\n\n      <!-- Follow user -->\n      <button ion-button color="default" item-right outline *ngIf="!user.isFollowing" (click)="follow(user)">\n        Follow\n      </button>\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\following\following.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_connections_connections__["a" /* ConnectionsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], FollowingPage);

//# sourceMappingURL=following.js.map

/***/ })

});
//# sourceMappingURL=20.js.map