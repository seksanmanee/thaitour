webpackJsonp([22],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(910);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of Edit Profile
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = (function () {
    function EditProfilePageModule() {
    }
    return EditProfilePageModule;
}());
EditProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
        ]
    })
], EditProfilePageModule);

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(164);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of user edit profile page
 * File path - '../../../src/pages/edit-profile/edit-profile'
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





var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, viewCtrl, navParams, userProvider, imageProvider, utilsProvider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.imageProvider = imageProvider;
        this.utilsProvider = utilsProvider;
        this.user = {}; // User Object
    }
    /***
     * Do any initialization
     */
    EditProfilePage.prototype.ngOnInit = function () {
        this.getNavParamsData();
    };
    /**
     * --------------------------------------------------------------
     * Get & Set data from navParams
     * --------------------------------------------------------------
     */
    EditProfilePage.prototype.getNavParamsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.navParams.get('userInfo')) {
                    this.user = this.navParams.get('userInfo');
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Chage and Update Profile Photo
     * --------------------------------------------------------------
     * @method changeProfilePhoto()
     *
     * This function call `this.imageProvider.openGallery` method by passing user id and
     * request type. and the returning value will be assign by `this.userNewImage` variable
     * as a new profile updated photo.
     *
     */
    EditProfilePage.prototype.changeProfilePhoto = function () {
        var _this = this;
        try {
            this.imageProvider.openGallery(this.user.uid, 'profile').then(function (success) {
                _this.userNewImage = success;
                _this.user.image = _this.userNewImage;
                _this.utilsProvider.hideLoading();
            }).catch(function (err) {
                _this.utilsProvider.hideLoading();
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    /**
     * --------------------------------------------------------------
     * Update User Profile Photo
     * --------------------------------------------------------------
     * @method updateProfilePhoto()
     */
    EditProfilePage.prototype.updateProfilePhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userProvider.updateProfileImage(this.user)
                                .then(function (success) {
                                _this.userNewImage = '';
                                _this.utilsProvider.presentToast('Your profile photo successfully updated!', 3000, 'bottom');
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
     * Update User Information
     * --------------------------------------------------------------
     * @method updateUserInfo
     * This function call `this.userProvider.updateUserData` method to update user own profile
     * information. Then call `this.userProvider.updateUserName` method to update user profile name
     * with references location of database.
     */
    EditProfilePage.prototype.updateUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.userProvider.updateUserData(this.user);
                    if (this.user.name) {
                        this.userProvider.updateUserName(this.user).then(function (success) {
                            _this.utilsProvider.presentToast('Your profile successfully updated!', 3000, 'bottom');
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                }
                catch (err) {
                    console.log(err);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    EditProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\edit-profile\edit-profile.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- User Edit Profile Page -->\n\n<!-- Header Part -->\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <!-- Close Modal -->\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- Page Title -->\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n<!-- End Header Part -->\n\n<!-- Body Content Part -->\n<ion-content>\n\n  <!-- User Profile Photo Option -->\n  <ion-card color="light">\n    <div text-center>\n\n      <!-- Button of change photo -->\n      <ion-fab top (click)="changeProfilePhoto()">\n        <button ion-fab mini color="default">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-fab>\n\n      <!-- Profile Picture -->\n      <ion-img [src]="user.image" [alt]="user.name"></ion-img>\n      <br>\n\n      <!--\n        - Update Profile Photo\n        - This button hide initially, show this option when `userNewImage` are available\n      -->\n      <button ion-button color="default" clear *ngIf="userNewImage" (click)="updateProfilePhoto()">\n        <span class="change-photo">Update Photo</span>\n      </button>\n    </div>\n  </ion-card>\n\n  <!-- Personal Information Update Section -->\n  <ion-list>\n    <!-- Heading -->\n    <ion-list-header>\n      Personal Information\n    </ion-list-header>\n\n    <!-- User Name Input Field -->\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" class="ion-ios-locked-outline" name="name" [(ngModel)]="user.name"></ion-input>\n    </ion-item>\n\n    <!-- Bio Input Field -->\n    <ion-item>\n      <ion-label floating>Bio</ion-label>\n      <ion-input type="text" class="ion-ios-locked-outline" name="bio" [(ngModel)]="user.bio"></ion-input>\n    </ion-item>\n\n    <!-- Birthday Input Field -->\n    <ion-item>\n      <ion-label floating>Birthday</ion-label>\n      <input type="datetime-local">\n      <ion-datetime displayFormat="MMM DD YYYY" class="ion-ios-locked-outline" [(ngModel)]="user.birthday"></ion-datetime>\n    </ion-item>\n\n    <!-- Phone Number Input Field -->\n    <ion-item>\n      <ion-label floating>Phone</ion-label>\n      <ion-input type="text" class="ion-ios-locked-outline" name="phone" [(ngModel)]="user.phone"></ion-input>\n    </ion-item>\n\n    <!-- Website Input Field -->\n    <ion-item>\n      <ion-label floating>Website</ion-label>\n      <ion-input type="text" class="ion-ios-locked-outline" name="website" [(ngModel)]="user.website"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <!-- Update button of user information -->\n    <button ion-button block round color="default" (click)="updateUserInfo()">\n      Update\n    </button>\n  </ion-list>\n</ion-content>\n<!-- End Body Content Part -->'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\edit-profile\edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=22.js.map