webpackJsonp([14],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(922);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of post page
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostPageModule = (function () {
    function PostPageModule() {
    }
    return PostPageModule;
}());
PostPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]
        ]
    })
], PostPageModule);

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_post__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_storage__ = __webpack_require__(69);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of post page
 * File path - '../../../src/pages/post/post'
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


 // Utils provider
 // Post Provider
 // Image Provider
 // Storage Provider
var PostPage = (function () {
    function PostPage(navParams, viewCtrl, storageProvider, postProvider, imageProvider, utilsProvider) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storageProvider = storageProvider;
        this.postProvider = postProvider;
        this.imageProvider = imageProvider;
        this.utilsProvider = utilsProvider;
        this.userObj = {};
        this.postModel = {};
    }
    /**
     * Do any initialization
     */
    PostPage.prototype.ngOnInit = function () {
        this.getPostInformation();
        this.loadStorageData();
    };
    /**
     * --------------------------------------------------------------
     * Get localstorage user data
     * --------------------------------------------------------------
     *
     * @method loadStorageData This function get userId from localstorage
     */
    PostPage.prototype.loadStorageData = function () {
        var _this = this;
        this.storageProvider.get().then(function (success) {
            _this.userObj = success;
        });
    };
    /**
     * --------------------------------------------------------------
     * Get & Set Post data from navParams
     * --------------------------------------------------------------
     */
    PostPage.prototype.getPostInformation = function () {
        // Get post information from navParams
        if (this.navParams.get('postInfo')) {
            this.postModel = this.navParams.get('postInfo');
        }
    };
    /**
     * --------------------------------------------------------------
     * Create a New Post
     * --------------------------------------------------------------
     * @method newPost
     */
    PostPage.prototype.newPost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Define new post data's
                        this.postModel.userImage = this.userObj.image;
                        this.postModel.userName = this.userObj.name;
                        this.postModel.uid = this.userObj.userId;
                        this.postModel.isLike = false;
                        this.postModel.status = true;
                        this.postModel.createdDate = new Date();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // Present a loading
                        this.utilsProvider.presentLoading();
                        // Call a post provider to create a new post
                        return [4 /*yield*/, this.postProvider
                                .createPost(this.postModel)
                                .then(function (success) {
                                _this.utilsProvider.presentToast('Your post successfully published!', 3000, 'top');
                                _this.viewCtrl.dismiss({ success: true });
                                _this.postModel.featureImage = '';
                                _this.postModel.text = '';
                                _this.utilsProvider.hideLoading();
                            })
                                .catch(function (err) {
                                _this.utilsProvider.hideLoading();
                            })];
                    case 2:
                        // Call a post provider to create a new post
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.utilsProvider.hideLoading();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Update Post
     * --------------------------------------------------------------
     *
     * @method updatePost   This function updates post in the database
     */
    PostPage.prototype.updatePost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.postModel.updatedDate = new Date();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // Present a loading
                        this.utilsProvider.presentLoading();
                        // Call a post provider to update a post
                        return [4 /*yield*/, this.postProvider
                                .updatePost(this.postModel)
                                .then(function (success) {
                                _this.postModel.featureImage = '';
                                _this.postModel.text = '';
                                _this.utilsProvider.hideLoading();
                                _this.utilsProvider.presentToast('Your post successfully updated!', 3000, 'top');
                                _this.viewCtrl.dismiss({ success: true });
                            })
                                .catch(function (err) {
                                _this.utilsProvider.hideLoading();
                            })];
                    case 2:
                        // Call a post provider to update a post
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        this.utilsProvider.hideLoading();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Open Camera Gallery
     * --------------------------------------------------------------
     * @method openCameraGallery
     *
     * This function call `this.imageProvider.openGallery` method by passing user id and
     * request type. And the returning value will be assign by `this.postModel.featureImage`
     * as a featured image of the post.
     */
    PostPage.prototype.openCameraGallery = function () {
        var _this = this;
        try {
            this.imageProvider
                .openGallery(this.userObj.userId, 'post')
                .then(function (success) {
                _this.postModel.featureImage = success;
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
     * Open Camera
     * --------------------------------------------------------------
     * @method openCamera
     *
     * This function call `this.imageProvider.openCamera` method by passing user id and
     * request type. And the returning value will be assign by `this.postModel.featureImage`
     * as a featured image of the post.
     */
    PostPage.prototype.openCamera = function () {
        var _this = this;
        try {
            this.imageProvider
                .openCamera(this.userObj.userId, 'post')
                .then(function (success) {
                _this.postModel.featureImage = success;
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
     * Close the current view page
     */
    PostPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ success: false });
    };
    return PostPage;
}());
PostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-post',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\post\post.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Post Page  -->\n\n<!-- Header Part -->\n<ion-header no-border>\n  <ion-navbar color="white">\n    <button ion-button color="default" clear (click)="dismiss()">\n      <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <img *ngIf="userObj.name" [src]="userObj.image" [alt]="userObj.name">\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- Body Part -->\n<ion-content class="has-header">\n\n  <!-- Status input textbox -->\n  <ion-row>\n    <ion-col>\n      <ion-textarea padding class="status-text" name="status" minlength="10" maxlength="150" required [(ngModel)]="postModel.text"\n        placeholder="What\'s happening?">\n      </ion-textarea>\n    </ion-col>\n  </ion-row>\n\n  <hr>\n\n  <!-- status feature images -->\n  <ion-row>\n    <ion-col>\n      <div id="post-img">\n        <img *ngIf="postModel.featureImage" [src]="postModel.featureImage">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<!-- Footer Part -->\n<ion-footer class="custom-footer">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <!-- Camera gallery button to open phone gallery option -->\n        <button ion-button color="white" clear>\n          <ion-icon name="images" (tap)="openCameraGallery()"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <!-- Camera button to open phone camera option -->\n        <button ion-button color="white" clear>\n          <ion-icon name="camera" (tap)="openCamera()"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <!-- Count status content and show the total lehgth of content -->\n        <button ion-button color="white" clear>\n          <span *ngIf="postModel.text">{{postModel.text.length}}</span>\n          <span *ngIf="!postModel.text">0</span>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <!-- Add new post option button -->\n        <button ion-button color="white" float-right [disabled]="!postModel.text" *ngIf="!postModel.uid" (click)="newPost()">\n          Post\n        </button>\n        <!-- Update post option button -->\n        <button ion-button color="white" float-right *ngIf="postModel.uid" (click)="updatePost()">\n          Update Post\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\post\post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_utils_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_post_post__["a" /* PostProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */]])
], PostPage);

//# sourceMappingURL=post.js.map

/***/ })

});
//# sourceMappingURL=14.js.map