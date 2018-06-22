webpackJsonp([19],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendRequestPageModule", function() { return FriendRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_request__ = __webpack_require__(913);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of friend request page
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendRequestPageModule = (function () {
    function FriendRequestPageModule() {
    }
    return FriendRequestPageModule;
}());
FriendRequestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__friend_request__["a" /* FriendRequestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friend_request__["a" /* FriendRequestPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__friend_request__["a" /* FriendRequestPage */]
        ]
    })
], FriendRequestPageModule);

//# sourceMappingURL=friend-request.module.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_friends_friends__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_storage__ = __webpack_require__(69);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of friend request
 * File path - '../../../src/pages/friend-request/friend-request'
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




var FriendRequestPage = (function () {
    function FriendRequestPage(navCtrl, friendsProvider, storageProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.friendsProvider = friendsProvider;
        this.storageProvider = storageProvider;
        this.modalCtrl = modalCtrl;
        this.friendRequestList = [];
    }
    /***
     * --------------------------------------------------------------
     * Lifecycle Event - ionViewDidEnter()
     * --------------------------------------------------------------
     *
     * Fired when entering a page, after it becomes the active page.
     */
    FriendRequestPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loadStorageData().then(function () {
            _this.getFriendRequest();
        });
    };
    /**
     * --------------------------------------------------------------
     * Get localstorage user data
     * --------------------------------------------------------------
     *
     * @method loadStorageData This function get userId from localstorage
     */
    FriendRequestPage.prototype.loadStorageData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageProvider.get().then(function (success) {
                            _this.currentUserId = success.userId;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * List of User Friend Request
     * --------------------------------------------------------------
     * @method getFriendRequest
     *
     * This function call `this.friendsProvider.getFriendRequestList` method to get a list
     * of friend request and assign list of data to `this.friendRequestList` array of object
     * property.
     */
    FriendRequestPage.prototype.getFriendRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.friendsProvider.getFriendRequestList(this.currentUserId).then(function (list) {
                        _this.friendRequestList = list;
                    });
                }
                catch (err) {
                    console.log(err);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Accept Friend Request
     * --------------------------------------------------------------
     * @method acceptFriendRequest
     * This function call `this.friendsProvider.confirmFriendRequest` method by passing
     * current and target user ID to accept/confirm friend request.
     *
     * @param targetUserId    Particular user ID
     * @param i               Index Number List of Friend Request
     *
     */
    FriendRequestPage.prototype.acceptFriendRequest = function (targetUserId, i) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.friendsProvider.confirmFriendRequest(targetUserId, this.currentUserId)
                                .then(function (success) {
                                if (success) {
                                    _this.friendRequestList.splice(i, 1);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Decline Friend Request
     * --------------------------------------------------------------
     * @method declineFriendRequest
     * This function call `this.friendsProvider.cancelFriendRequest` method by passing
     * target user ID to decline/cancel friend request.
     *
     * @param targetUserId  Particular user ID
     * @param i             Index Number List of Friend Request
     */
    FriendRequestPage.prototype.declineFriendRequest = function (targetUserId, i) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.friendsProvider.cancelFriendRequest(targetUserId, this.currentUserId)
                                .then(function (success) {
                                if (success) {
                                    _this.friendRequestList.splice(i, 1);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Open User Public Profile
     * --------------------------------------------------------------
     * @param userId    Particular User Id
     */
    FriendRequestPage.prototype.gotoUserProfile = function (userId) {
        var modal = this.modalCtrl.create('UserPublicProfilePage', { userId: userId });
        modal.present();
    };
    /**
     * --------------------------------------------------------------
     * Ionic Refresher
     * --------------------------------------------------------------
     *
     * @method doRefresh The Refresher provides pull-to-refresh
     * functionality on a content component.
     */
    FriendRequestPage.prototype.doRefresh = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getFriendRequest().then(function () {
                    event.complete();
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Refresh Page
     * --------------------------------------------------------------
     *
     * @method refresh
     */
    FriendRequestPage.prototype.refresh = function () {
        this.navCtrl.setRoot('FriendRequestPage');
    };
    return FriendRequestPage;
}());
FriendRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friend-request',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\friend-request\friend-request.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n\n  ** Friend Request Page\n-->\n\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-title>Friend Requests</ion-title>\n\n    <ion-buttons end>\n      <!-- Button: Refresh -->\n      <button ion-button icon-only color="default" clear (click)="refresh()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event);">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Display List of Friend Request -->\n  <ion-list *ngIf="friendRequestList.length > 0">\n    <ion-item *ngFor="let request of friendRequestList; let i = index">\n\n      <!-- User profile picture -->\n      <ion-thumbnail item-start (click)="gotoUserProfile(request.uid)">\n        <img [src]="request.image">\n      </ion-thumbnail>\n\n      <!-- User profile name -->\n      <p (click)="gotoUserProfile(request.uid)">{{request.name}}</p>\n\n\n      <button ion-button round (click)="acceptFriendRequest(request.uid, i)">Confirm</button>\n\n      <!-- Decline Friend Request  -->\n      <button ion-button round (click)="declineFriendRequest(request.uid, i)">Remove</button>\n    </ion-item>\n  </ion-list>\n\n  <!-- This part can be seen when the list is empty -->\n  <div id="not-found" *ngIf="friendRequestList.length == 0">\n    <h2>Nothing Found</h2>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\friend-request\friend-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_friends_friends__["a" /* FriendsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], FriendRequestPage);

//# sourceMappingURL=friend-request.js.map

/***/ })

});
//# sourceMappingURL=19.js.map