webpackJsonp([23],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPeoplePageModule", function() { return DiscoverPeoplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_people__ = __webpack_require__(914);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of discover people
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiscoverPeoplePageModule = (function () {
    function DiscoverPeoplePageModule() {
    }
    return DiscoverPeoplePageModule;
}());
DiscoverPeoplePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__discover_people__["a" /* DiscoverPeoplePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__discover_people__["a" /* DiscoverPeoplePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__discover_people__["a" /* DiscoverPeoplePage */]
        ]
    })
], DiscoverPeoplePageModule);

//# sourceMappingURL=discover-people.module.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_friends_friends__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connections_connections__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_storage__ = __webpack_require__(69);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of discover people
 * File path - '../../../src/pages/discover-people/discover-people'
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





var DiscoverPeoplePage = (function () {
    function DiscoverPeoplePage(viewCtrl, friendsProvider, storageProvider, connectionsProvider, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.friendsProvider = friendsProvider;
        this.storageProvider = storageProvider;
        this.connectionsProvider = connectionsProvider;
        this.modalCtrl = modalCtrl;
        this.suggestedUsers = []; // List of Suggested Users
    }
    /***
     * --------------------------------------------------------------
     * Lifecycle Event - ionViewDidEnter()
     * --------------------------------------------------------------
     *
     * Fired when entering a page, after it becomes the active page.
     */
    DiscoverPeoplePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loadStorageData().then(function () {
            _this.getSuggestedUsers();
        });
    };
    /**
     * --------------------------------------------------------------
     * Get Localstorage User Data
     * --------------------------------------------------------------
     *
     * @method loadStorageData This function get userId from localstorage
     */
    DiscoverPeoplePage.prototype.loadStorageData = function () {
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
     * Suggested Users
     * --------------------------------------------------------------
     * @method getSuggestedUsers
     *
     * This function load suggested users by calling connection provider
     * `getDiscoverPeoples` method.
     */
    DiscoverPeoplePage.prototype.getSuggestedUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.connectionsProvider.getDiscoverPeoples(this.currentUserId)
                        .then(function (data) {
                        _this.suggestedUsers = data;
                    }).catch(function (error) {
                        console.log(error);
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
     * Follow User
     * --------------------------------------------------------------
     * @method follow
     * This function works to follow user and call a connection provider `followUser` method by passing
     * two params `targetUserId` and `this.currentUserId`. here, `targetUserId` is any user ID would like to
     * follow and `this.currentUserId` is current user ID.
     *
     * @param targetUserId  Selecte User ID
     * @param index Selected Array Index Number
     */
    DiscoverPeoplePage.prototype.followUser = function (targetUserId, index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.connectionsProvider.followUser(targetUserId, this.currentUserId).then(function (success) {
                        success.subscribe(function () {
                            _this.suggestedUsers.splice(index, 1);
                        });
                    }).catch(function (err) {
                        console.log(err);
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
     * Send Friend Request
     * --------------------------------------------------------------
     * @method sendFriendRequest
     * This function is used to send Friend Requests. Call a friends provider `addFriendRequest` method by
     * two params `this.currentUserId` and `receiverId` here, `receiverId` is any user ID would like to
     * send friend request and `this.currentUserId` is current user ID.
     *
     * @param receiverId Whom I want to send friend request
     * @param index Selected Array Index Number
     */
    DiscoverPeoplePage.prototype.sendFriendRequest = function (receiverId, index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.friendsProvider.addFriendRequest(this.currentUserId, receiverId)
                                .then(function (success) {
                                if (success) {
                                    _this.suggestedUsers.splice(index, 1);
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
     * Ionic Refresher
     * --------------------------------------------------------------
     *
     * @method doRefresh The Refresher provides pull-to-refresh
     * functionality on a content component.
     */
    DiscoverPeoplePage.prototype.doRefresh = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getSuggestedUsers().then(function () {
                    event.complete();
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Open Particular User Profile
     * --------------------------------------------------------------
     * @method gotoUserProfile
     *
     * This function create a modal to open particular user public profile.
     *
     * @param userId
     */
    DiscoverPeoplePage.prototype.gotoUserProfile = function (userId) {
        var modal = this.modalCtrl.create('UserPublicProfilePage', { userId: userId });
        modal.present();
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    DiscoverPeoplePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return DiscoverPeoplePage;
}());
DiscoverPeoplePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-discover-people',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\discover-people\discover-people.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Discover People/ Suggested User List -->\n\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Discover People</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event);">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item *ngFor="let user of suggestedUsers; let i=index">\n\n      <!-- User Profile Picture -->\n      <ion-thumbnail item-start (click)="gotoUserProfile(user.uid)">\n        <img [src]="user.image">\n      </ion-thumbnail>\n\n      <!-- User Profile Name -->\n      <h2 (click)="gotoUserProfile(user.uid)">{{user.name}}</h2>\n\n\n      <!-- Follow -->\n      <button ion-button outline color="danger" (click)="followUser(user.uid, i)">\n        Follow\n      </button>\n\n      <!-- Add Friend Request -->\n      <button ion-button outline color="primary" (click)="sendFriendRequest(user.uid, i)">\n        Add Friend\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <!-- Show When Empty List -->\n  <div id="not-found" *ngIf="suggestedUsers.length == 0">\n    <h2>Nothing Found</h2>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\discover-people\discover-people.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_friends_friends__["a" /* FriendsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utils_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_connections_connections__["a" /* ConnectionsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], DiscoverPeoplePage);

//# sourceMappingURL=discover-people.js.map

/***/ })

});
//# sourceMappingURL=23.js.map