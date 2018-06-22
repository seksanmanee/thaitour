webpackJsonp([27],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password__ = __webpack_require__(904);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetPasswordPageModule = (function () {
    function ForgetPasswordPageModule() {
    }
    return ForgetPasswordPageModule;
}());
ForgetPasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */]),
        ],
    })
], ForgetPasswordPageModule);

//# sourceMappingURL=forget-password.module.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(164);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of forget password module
 * File path - '../../../../src/pages/authentication/forget-password/forget-password'
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




var ForgetPasswordPage = (function () {
    function ForgetPasswordPage(viewCtrl, utilsProvider, authProvider) {
        this.viewCtrl = viewCtrl;
        this.utilsProvider = utilsProvider;
        this.authProvider = authProvider;
        // Assign form input fields
        this.form = {
            email: ''
        };
    }
    /**
     * --------------------------------------------------------------
     * Password Reset Request
     * --------------------------------------------------------------
     * @method passwordResetRequest
     */
    ForgetPasswordPage.prototype.passwordResetRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.utilsProvider.presentLoading();
                        return [4 /*yield*/, this.authProvider.sendPasswordResetEmail(this.form.email)
                                .subscribe(function (data) {
                                _this.utilsProvider.basicAlert('Change your password!', 'You should receive an email within a few minutes. This email contains a link to help you reset your password.');
                                _this.errorMsg = '';
                                _this.utilsProvider.hideLoading();
                            }, function (err) {
                                _this.errorMsg = err;
                                _this.utilsProvider.hideLoading();
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.errorMsg = err_1;
                        this.utilsProvider.hideLoading();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    ForgetPasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ForgetPasswordPage;
}());
ForgetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forget-password',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\authentication\forget-password\forget-password.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Forget Password Page -->\n\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Forget Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forget-password-content" padding>\n\n  <!-- Logo  -->\n  <ion-row class="logo-row">\n    <ion-col>\n      <img src="https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ionicbucket-socialapp/project-resource/socialapp-logo-new.png"\n      />\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <h3>Forget your Password?</h3>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <h5>Please enter your email address and we\'ll send you a link to reset your password</h5>\n    </ion-col>\n  </ion-row>\n\n  <!-- Form  -->\n  <div class="forget-password-box">\n    <form (ngSubmit)="passwordResetRequest()" #resetForm="ngForm">\n\n      <!-- Error Messages  -->\n      <ion-row>\n        <ion-col>\n          <div padding class="error" *ngIf="errorMsg">\n            <p>{{errorMsg}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- Email  -->\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-label>\n                <ion-icon color="default" name="md-mail"></ion-icon>\n              </ion-label>\n              <ion-input type="email" name="email" class="ion-ios-locked-outline" placeholder="Your email address" [(ngModel)]="form.email">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Submit Option  -->\n      <ion-row>\n        <ion-col class="forget-password-col">\n          <button ion-button type="submit" color="default" block [disabled]="!resetForm.valid">\n            Submit\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\authentication\forget-password\forget-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
], ForgetPasswordPage);

//# sourceMappingURL=forget-password.js.map

/***/ })

});
//# sourceMappingURL=27.js.map