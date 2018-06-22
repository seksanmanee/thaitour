webpackJsonp([15],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(919);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of home page
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_notification_notification__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_storage__ = __webpack_require__(69);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of home page
 * File path - '../../../src/pages/home/home'
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

// Import proviers


var HomePage = (function () {
    function HomePage(notificationProvider, storageProvider) {
        this.notificationProvider = notificationProvider;
        this.storageProvider = storageProvider;
        this.totalRequest = 0; // Define total friend request
        this.unreadNotification = 0; // Define total unread notification
        this.tab1 = 'NewsFeedPage'; // Define `tab1` to `NewsFeedPage`
        this.tab2 = 'FriendRequestPage'; // Define `tab2` to `FriendRequestPage`
        this.tab3 = 'FriendsLocationMapPage'; // Define `tab3` to `FriendsLocationMapPage`
        this.tab4 = 'NotificationPage'; // Define `tab4` to `NotificationPage`
        this.tab5 = 'ProfilePage'; // Define `tab5` to `ProfilePage`
    }
    /** Do any initialization */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        // Get current userId from local storage
        this.storageProvider.get().then(function (success) {
            _this.userId = success.userId;
            _this.totalFriendRequest();
            _this.totalUnreadNotification();
        });
    };
    /**
     * --------------------------------------------------------------
     * Total Friend Request
     * --------------------------------------------------------------
     * @method totalFriendRequest
     *
     * This function call `this.notificationProvider.totalFriendRequest` method by
     * passing current user ID and this return total pending friend request and assign
     * returning value with `this.totalRequest` variable and bind this value on tab two
     * in user home page.
     */
    HomePage.prototype.totalFriendRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.notificationProvider.totalFriendRequest(this.userId)
                                .subscribe(function (totalRequest) {
                                _this.totalRequest = totalRequest;
                            })];
                    case 1:
                        _a.subscription = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Total Unread Notification
     * --------------------------------------------------------------
     * @method totalUnreadNotification
     * This function call `this.notificationProvider.totalUnreadNotification` method
     * by passing current user Id and this return the total number of unread notification,
     * assign returning value with `this.unreadNotification` variable and bind this value
     * on tab four in user home page.
     */
    HomePage.prototype.totalUnreadNotification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.notificationProvider.totalUnreadNotification(this.userId)
                                .subscribe(function (total) {
                                _this.unreadNotification = total;
                            })];
                    case 1:
                        _a.subscription = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Enter the Notification Page
     * --------------------------------------------------------------
     * @method clickNotificationTab
     * When user click and enter notification page make total unread notification zero.
     */
    HomePage.prototype.clickNotificationTab = function () {
        var _this = this;
        try {
            this.notificationProvider.makeTotalNotificationZero(this.userId)
                .subscribe(function (success) {
                _this.unreadNotification = 0;
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    /**
     * Lifecycle hook that is called to destroyed all events.
     */
    HomePage.prototype.ngDestroy = function () {
        this.subscription.unsubscribe();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\home\home.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n\n  ** Home Page\n-->\n<ion-content>\n  <ion-tabs>\n    <ion-tab tabIcon="home" [root]="tab1"></ion-tab>\n    <ion-tab tabIcon="people" [root]="tab2" tabBadge="{{totalRequest}}" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabIcon="locate" [root]="tab3"></ion-tab>\n    <ion-tab tabIcon="notifications" [root]="tab4" tabBadge="{{unreadNotification}}" tabBadgeStyle="danger" (ionSelect)="clickNotificationTab()"></ion-tab>\n    <ion-tab tabIcon="person" [root]="tab5"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_notification_notification__["a" /* NotificationProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_storage__["a" /* StorageProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map