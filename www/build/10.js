webpackJsonp([10],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailChangePageModule", function() { return EmailChangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_change__ = __webpack_require__(916);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents module of Email Change Page
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailChangePageModule = (function () {
    function EmailChangePageModule() {
    }
    return EmailChangePageModule;
}());
EmailChangePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__email_change__["a" /* EmailChangePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_change__["a" /* EmailChangePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__email_change__["a" /* EmailChangePage */]
        ]
    })
], EmailChangePageModule);

//# sourceMappingURL=email-change.module.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a validation of Email Address
 * File path - '../../../src/validators/email.validator'
 */
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.validator.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(380);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of change user email
 * File path - '../../../src/pages/email-change/email-change'
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






var EmailChangePage = (function () {
    function EmailChangePage(formBuilder, utilsProvider, viewCtrl, authProvider) {
        this.formBuilder = formBuilder;
        this.utilsProvider = utilsProvider;
        this.viewCtrl = viewCtrl;
        this.authProvider = authProvider;
    }
    /**
     * Do any initialization
     */
    EmailChangePage.prototype.ngOnInit = function () {
        this.formValidation();
    };
    /***
     * --------------------------------------------------------------
     * Form Validation
     * --------------------------------------------------------------
     * @method formValidation
     * This function build form of email change with validation
     * Creating three input fields in this form
     * 1. currentEmail    - User Current Email Address
     * 2. password        - User Current Password
     * 3. newEmail        - User New Email Address
     */
    EmailChangePage.prototype.formValidation = function () {
        this.emailForm = this.formBuilder.group({
            currentEmail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            newEmail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__["a" /* EmailValidator */].isValid])]
        });
    };
    /**
     * --------------------------------------------------------------
     * Update Email Address
     * --------------------------------------------------------------
     * @method updateEmail
     *
     * This function call a authentication provider `updateEmail` by passing three params to update
     * user email address.
     */
    EmailChangePage.prototype.updateEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.utilsProvider.presentLoading(); // Start loading
                        return [4 /*yield*/, this.authProvider.updateEmail(this.emailForm.currentEmail, this.emailForm.password, this.emailForm.newEmail)
                                .then(function (res) {
                                _this.utilsProvider.hideLoading(); // Hide loading
                                _this.utilsProvider.basicAlert('Success', 'Your Email Address Change Successfully').then(function () {
                                    _this.viewCtrl.dismiss();
                                });
                            }, function (err) {
                                _this.utilsProvider.hideLoading(); // Hide loading
                                _this.utilsProvider.basicAlert('Error', err.message);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.utilsProvider.hideLoading(); // Hide loading
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
    EmailChangePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return EmailChangePage;
}());
EmailChangePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-email-change',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\email-change\email-change.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Email Change Page -->\n\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <!-- Close Modal Button  -->\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- Page Title -->\n    <ion-title>Change Email</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="emailForm">\n    <ion-list>\n      <!-- User Current Email Address -->\n      <ion-item>\n        <ion-label floating>Current Email Address</ion-label>\n        <ion-input type="email" class="ion-ios-locked-outline" formControlName="currentEmail" [(ngModel)]="emailForm.currentEmail"\n          [class.invalid]="!emailForm.controls.currentEmail.valid && emailForm.controls.currentEmail.dirty">\n        </ion-input>\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!emailForm.controls.currentEmail.valid  && emailForm.controls.currentEmail.dirty">\n        <p>Please enter a valid email.</p>\n      </ion-item>\n\n      <!-- User Current Password -->\n      <ion-item>\n        <ion-label floating>Current Password</ion-label>\n        <ion-input type="password" class="ion-ios-locked-outline" [class.invalid]="!emailForm.controls.password.valid && emailForm.controls.password.dirty"\n          formControlName="password" [(ngModel)]="emailForm.password">\n        </ion-input>\n      </ion-item>\n\n      <!-- New Email Address -->\n      <ion-item>\n        <ion-label floating>New Email Address</ion-label>\n        <ion-input type="email" class="ion-ios-locked-outline" formControlName="newEmail" [class.invalid]="!emailForm.controls.newEmail.valid && emailForm.controls.newEmail.dirty"\n          [(ngModel)]="emailForm.newEmail">\n        </ion-input>\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!emailForm.controls.newEmail.valid  && emailForm.controls.newEmail.dirty">\n        <p>Please enter a valid email.</p>\n      </ion-item>\n\n      <!-- Update button -->\n      <button ion-button type="submit" color="default" block class="btn btn-primary" [disabled]="!emailForm.valid" (click)="updateEmail()">\n        Update\n      </button>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\email-change\email-change.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
], EmailChangePage);

//# sourceMappingURL=email-change.js.map

/***/ })

});
//# sourceMappingURL=10.js.map