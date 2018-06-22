webpackJsonp([9],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangePageModule", function() { return PasswordChangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_change__ = __webpack_require__(924);
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
 * This file represents a module of change password page
 */



var PasswordChangePageModule = (function () {
    function PasswordChangePageModule() {
    }
    return PasswordChangePageModule;
}());
PasswordChangePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__password_change__["a" /* PasswordChangePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_change__["a" /* PasswordChangePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__password_change__["a" /* PasswordChangePage */]
        ]
    })
], PasswordChangePageModule);

//# sourceMappingURL=password-change.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordMatchValidator; });
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a validation of Password
 * File path - '../../../src/validators/password-match.validator'
 */
var PasswordMatchValidator = (function () {
    function PasswordMatchValidator() {
    }
    PasswordMatchValidator.matchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
        };
    };
    return PasswordMatchValidator;
}());

//# sourceMappingURL=password-match.validator.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_match_validator__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(380);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of change user password
 * File path - '../../../src/pages/password-change/password-change'
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






var PasswordChangePage = (function () {
    function PasswordChangePage(viewCtrl, formBuilder, utilsProvider, authProvider) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.utilsProvider = utilsProvider;
        this.authProvider = authProvider;
    }
    /**
     * Do any initialization
     */
    PasswordChangePage.prototype.ngOnInit = function () {
        this.formValidation();
    };
    /***
     * --------------------------------------------------------------
     * Form Validation
     * --------------------------------------------------------------
     * @method formValidation
     * This function build a form of password change with validation
     * Creating three input fields in this form
     * 1. currentPassword    - User Current password
     * 2. newPassword        - User New Password
     * 3. repeatPassword     - Repeat password
     */
    PasswordChangePage.prototype.formValidation = function () {
        this.passwordForm = this.formBuilder.group({
            currentPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            repeatPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_3__validators_password_match_validator__["a" /* PasswordMatchValidator */].matchingPasswords('newPassword', 'repeatPassword')
        });
    };
    /**
     * --------------------------------------------------------------
     * Update Password
     * --------------------------------------------------------------
     * @method updatePassword
     *
     * This function call a authentication provider `updatePassword` by passing two params to update
     * user password
     */
    PasswordChangePage.prototype.updatePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.utilsProvider.presentLoading();
                        return [4 /*yield*/, this.authProvider.updatePassword(this.passwordForm.currentPassword, this.passwordForm.newPassword)
                                .then(function (res) {
                                _this.utilsProvider.hideLoading();
                                _this.utilsProvider.basicAlert('Success', 'Your Password Change Successfully').then(function () {
                                    _this.viewCtrl.dismiss();
                                });
                            }, function (err) {
                                _this.utilsProvider.hideLoading();
                                _this.utilsProvider.basicAlert('Error', err.message);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.utilsProvider.hideLoading();
                        this.utilsProvider.basicAlert('Error', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Dismiss
     * --------------------------------------------------------------
     * @method dismiss    This function dismiss the open popup modal
     */
    PasswordChangePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PasswordChangePage;
}());
PasswordChangePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-password-change',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\password-change\password-change.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Password Change Page -->\n\n<ion-header no-border>\n\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <!-- Modal close button  -->\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <!-- page title -->\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="passwordForm">\n    <ion-list>\n      <!-- User Current Password -->\n      <ion-item>\n        <ion-label>\n          <ion-icon color="default" name="lock"></ion-icon>\n        </ion-label>\n        <ion-input type="password" placeholder="Current password" class="ion-ios-locked-outline" formControlName="currentPassword"\n          [(ngModel)]="passwordForm.currentPassword">\n        </ion-input>\n      </ion-item>\n\n      <!-- New Password Option -->\n      <ion-item>\n        <ion-label>\n          <ion-icon color="default" name="lock"></ion-icon>\n        </ion-label>\n        <ion-input type="password" placeholder="New Password" class="ion-ios-locked-outline" formControlName="newPassword" [(ngModel)]="passwordForm.newPassword">\n        </ion-input>\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!passwordForm.controls.newPassword.valid  && passwordForm.controls.newPassword.dirty">\n        <p>Your password needs more than 6 characters.</p>\n      </ion-item>\n\n      <!-- New password, again -->\n      <ion-item>\n        <ion-label>\n          <ion-icon color="default" name="lock"></ion-icon>\n        </ion-label>\n        <ion-input type="password" placeholder="New Password, again" class="ion-ios-locked-outline" formControlName="repeatPassword"\n          [(ngModel)]="passwordForm.repeatPassword">\n        </ion-input>\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!passwordForm.controls.repeatPassword.valid  && passwordForm.controls.repeatPassword.dirty">\n        <p>Password mismatch.</p>\n      </ion-item>\n\n      <!-- Update button -->\n      <button ion-button type="submit" color="default" block class="btn btn-primary" [disabled]="!passwordForm.valid" (click)="updatePassword()">\n        Update\n      </button>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\password-change\password-change.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
], PasswordChangePage);

//# sourceMappingURL=password-change.js.map

/***/ })

});
//# sourceMappingURL=9.js.map