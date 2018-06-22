webpackJsonp([13],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(926);
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
 * This file represents module of settings page
 */



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_friends_location_map_friends_location_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_admob_free_admob_free__ = __webpack_require__(169);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of settings page
 * File path - '../../../src/pages/settings/settings'
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








var SettingsPage = (function () {
    function SettingsPage(viewCtrl, modalCtrl, auth, locationProvider, storageProvider, utilsProvider, sharedProvider, admobFree) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.locationProvider = locationProvider;
        this.storageProvider = storageProvider;
        this.utilsProvider = utilsProvider;
        this.sharedProvider = sharedProvider;
        this.admobFree = admobFree;
    }
    /**
     * Do any initialization
     */
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadStorageData().then(function () {
            _this.getUserInfos();
            _this.prepareBanner(); // Show banner ad
            _this.prepareInterstitial(); // Show Interstitial add
        });
    };
    /**
     * --------------------------------------------------------------
     * Get Localstorage User ID
     * --------------------------------------------------------------
     *
     * @method loadStorageData This function get userId from localstorage
     */
    SettingsPage.prototype.loadStorageData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageProvider.get().then(function (success) {
                            _this.userId = success.userId;
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
     * Get User Information
     * --------------------------------------------------------------
     * @method getUserInfos
     * This function get user current information from the database.
     */
    SettingsPage.prototype.getUserInfos = function () {
        var _this = this;
        this.sharedProvider.getUserInfoByUserId(this.userId)
            .then(function (userInfo) {
            _this.userInfo = userInfo;
            _this.isShareLocation = userInfo.isShareLocation; // User Location Status
        }).catch(function (err) {
            console.log(err);
        });
    };
    /**
     * --------------------------------------------------------------
     * Open Edit Profile Page
     * --------------------------------------------------------------
     * @method gotoEditProfile
     */
    SettingsPage.prototype.gotoEditProfile = function () {
        // Create a modal to open edit profile page
        this.modalCtrl.create('EditProfilePage', { userInfo: this.userInfo }).present();
    };
    /**
     * --------------------------------------------------------------
     * Open Email Change Page
     * --------------------------------------------------------------
     * @method gotoEmailChangePage
     */
    SettingsPage.prototype.gotoEmailChangePage = function () {
        // Create a modal to open email change page
        this.modalCtrl.create('EmailChangePage').present();
    };
    /**
     * --------------------------------------------------------------
     * Open Password Change Page
     * --------------------------------------------------------------
     * @method gotoPasswordChangePage
     */
    SettingsPage.prototype.gotoPasswordChangePage = function () {
        // Create a modal to open password change page
        this.modalCtrl.create('PasswordChangePage').present();
    };
    /**
     * --------------------------------------------------------------
     * Update User `Location of Share` Information
     * --------------------------------------------------------------
     *
     * @method updateShareLocation
     *
     * This function open front of user a confirm popup box, after click 'yes' option
     * this call a location provider method updateShareLocation() by pass user current Id and
     * current status of `this.isShareLocation`.
     */
    SettingsPage.prototype.updateShareLocation = function () {
        var _this = this;
        // Make a Object of Confirm Popup Box
        var object = {
            title: 'Location Status',
            message: "Are you sure? Do you want to make your location " + (this.isShareLocation === true ? 'Private' : 'Public') + "?"
        };
        // Open a confirm box by calling utils provider
        this.utilsProvider.showConfirm(object.title, object.message).then(function (data) {
            if (data === 'yes') {
                // reversed `this.isShareLocation` option value
                _this.isShareLocation = !_this.isShareLocation;
                // Call location provider method updateShareLocation() by passing userId and isShareLocation
                _this.locationProvider.updateShareLocation(_this.userId, _this.isShareLocation).then(function (success) {
                    _this.utilsProvider.presentToast('Your location has been changed successfully.', 3000, 'top');
                }).catch(function (error) {
                    _this.utilsProvider.presentToast('Sorry! Failed to change the location.', 3000, 'top');
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    /**
     * --------------------------------------------------------------
     * Prepare and show admob banner ad
     * --------------------------------------------------------------
     */
    SettingsPage.prototype.prepareBanner = function () {
        this.admobFree.prepareBanner();
    };
    /**
     * --------------------------------------------------------------
     * Prepare and show admob Interstitial ad
     * --------------------------------------------------------------
     */
    SettingsPage.prototype.prepareInterstitial = function () {
        this.admobFree.prepareInterstitial();
    };
    /**
     * --------------------------------------------------------------
     * Remove banner ad
     * --------------------------------------------------------------
     */
    SettingsPage.prototype.removeBanner = function () {
        this.admobFree.removeBanner();
    };
    /**
     * --------------------------------------------------------------
     * Logout
     * --------------------------------------------------------------
     *
     * @method logout
     *
     * By Calling `this.authProvider.logout` method It's logout the user account.
     */
    SettingsPage.prototype.logout = function () {
        this.viewCtrl.dismiss();
        this.auth.logout();
    };
    /**
     * --------------------------------------------------------------
     * Dismiss
     * --------------------------------------------------------------
     * @method dismiss    This function dismiss the open popup modal
     */
    SettingsPage.prototype.dismiss = function () {
        this.removeBanner();
        this.viewCtrl.dismiss();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\settings\settings.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n\n  - Settings Page \n-->\n\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <!-- Close button -->\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- Page title -->\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <!-- Change Email -->\n    <button ion-item (click)="gotoEmailChangePage()">\n      Change Email\n    </button>\n\n    <!-- Change Password -->\n    <button ion-item (click)="gotoPasswordChangePage()">\n      Change Password\n    </button>\n\n    <!-- Open User Profile -->\n    <button ion-item (click)="gotoEditProfile()">\n      Edit Profile\n    </button>\n\n    <!-- Change Status of Share Location -->\n    <button ion-item (click)="updateShareLocation()">\n      Change Location Status\n    </button>\n\n    <!-- Logout -->\n    <button ion-item (click)="logout()">\n      Logout\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_friends_location_map_friends_location_map__["a" /* FriendsLocationMapProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utils_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_admob_free_admob_free__["a" /* AdmobFreeProvider */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=13.js.map