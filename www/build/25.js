webpackJsonp([25],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContactsPageModule", function() { return ChatContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_contacts__ = __webpack_require__(905);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a module of Chat Contacts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatContactsPageModule = (function () {
    function ChatContactsPageModule() {
    }
    return ChatContactsPageModule;
}());
ChatContactsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_contacts__["a" /* ChatContactsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_contacts__["a" /* ChatContactsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat_contacts__["a" /* ChatContactsPage */]
        ]
    })
], ChatContactsPageModule);

//# sourceMappingURL=chat-contacts.module.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_friends_friends__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_storage__ = __webpack_require__(69);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of chat contacts
 * File path - '../../../../src/pages/chat/chat-contacts/chat-contacts'
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




var ChatContactsPage = (function () {
    function ChatContactsPage(modalCtrl, friendsProvider, storageProvider) {
        this.modalCtrl = modalCtrl;
        this.friendsProvider = friendsProvider;
        this.storageProvider = storageProvider;
        this.friendLists = []; // Array of friend list
        this.newFrndList = []; // Array of new friend list
    }
    /** Do any initialization */
    ChatContactsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadStorageData().then(function () {
            _this.getFriendList();
        });
    };
    /**
     * --------------------------------------------------------------
     * Get Localstorage User Data
     * --------------------------------------------------------------
     * @method loadStorageData This function get userId from localstorage
     */
    ChatContactsPage.prototype.loadStorageData = function () {
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
     * Get List of User Friends
     * --------------------------------------------------------------
     * @method getFriendsList   This function call friends provider
     * `getFriendsList` method by current user ID and the returning list will assign
     * in this `this.friendLists` variable.
     */
    ChatContactsPage.prototype.getFriendList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.friendsProvider.getChatFriends(this.currentUserId).then(function (success) {
                                if (success) {
                                    _this.friendLists = success;
                                    _this.newFrndList = _this.friendLists;
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
     * Search
     * --------------------------------------------------------------
     * @param ev
     */
    ChatContactsPage.prototype.getSearchResult = function (ev) {
        // Reset items back to all of the items
        this.friendLists = this.newFrndList;
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
     * Open Chat Box
     * --------------------------------------------------------------
     * @param receiver      Opposite User Information
     * @param index         Index Number List of Chat Friends
     */
    ChatContactsPage.prototype.gotoChatBox = function (receiver, index) {
        this.friendLists[index].unreadMsg = 0;
        var modal = this.modalCtrl.create('ChatBoxPage', { receiver: receiver });
        modal.present();
    };
    return ChatContactsPage;
}());
ChatContactsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat-contacts',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\chat\chat-contacts\chat-contacts.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- List of User Chat Contacts -->\n\n<ion-content padding>\n\n  <!-- User Search Option -->\n  <ion-searchbar animated="true" autocomplete="on" (ionInput)="getSearchResult($event)">\n  </ion-searchbar>\n\n  <ion-list>\n    <!-- Display Friend List -->\n    <ion-item *ngFor="let user of friendLists; let i = index" (click)="gotoChatBox(user, i)" [ngClass]="{\'read\': user.unreadMsg, \'unread\': !user.unreadMsg}">\n\n      <!-- User Profile Photo -->\n      <ion-avatar item-start>\n        <img [src]="user.image">\n      </ion-avatar>\n\n      <!-- User Name -->\n      <h2>{{ user.name }}</h2>\n\n      <!-- Total Number of Unread Chat Thread -->\n      <ion-badge item-end *ngIf="user.unreadMsg" color="default">{{user.unreadMsg}}</ion-badge>\n    </ion-item>\n\n    <!-- Show When Friend List is Empty -->\n    <div id="not-found" *ngIf="friendLists.length == 0">\n      <h2>Nothing Found</h2>\n    </div>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\chat\chat-contacts\chat-contacts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_friends_friends__["a" /* FriendsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_storage__["a" /* StorageProvider */]])
], ChatContactsPage);

//# sourceMappingURL=chat-contacts.js.map

/***/ })

});
//# sourceMappingURL=25.js.map