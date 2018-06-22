webpackJsonp([17],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsLocationMapPageModule", function() { return FriendsLocationMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends_location_map__ = __webpack_require__(917);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendsLocationMapPageModule = (function () {
    function FriendsLocationMapPageModule() {
    }
    return FriendsLocationMapPageModule;
}());
FriendsLocationMapPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__friends_location_map__["a" /* FriendsLocationMapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friends_location_map__["a" /* FriendsLocationMapPage */]),
        ],
    })
], FriendsLocationMapPageModule);

//# sourceMappingURL=friends-location-map.module.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsLocationMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_friends_location_map_friends_location_map__ = __webpack_require__(168);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Friends Location Map
 * File path - '../../../src/pages/friends-location-map/friends-location-map'
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






var FriendsLocationMapPage = (function () {
    function FriendsLocationMapPage(navCtrl, navParams, modalCtrl, utilsProvider, storageProvider, sharedProvider, friendsLocationMapProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.utilsProvider = utilsProvider;
        this.storageProvider = storageProvider;
        this.sharedProvider = sharedProvider;
        this.friendsLocationMapProvider = friendsLocationMapProvider;
        /**
         * Array of User Friends Location
         */
        this._friendsLocation = [];
        /**
         * --------------------------------------------------------------
         * Map Direction Status
         * --------------------------------------------------------------
         * @Bolean
         *
         * It will say that the map is directional or not. If `showDirectionDetails` status is true
         * then map show the direction of two user's location otherwise all friends location will be shown
         * inside the map. By default status will be false.
         *
         */
        this.showDirectionDetails = false;
    }
    /** Do Any Initialization */
    FriendsLocationMapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadStorageData().then(function () {
            _this.getUserInfos().then(function () {
                _this.initMap();
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Get Localstorage User Data
     * --------------------------------------------------------------
     *
     * @method loadStorageData This function get current user information from localstorage
     */
    FriendsLocationMapPage.prototype.loadStorageData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageProvider.get().then(function (success) {
                            _this._userId = success.userId;
                            _this._userInfo = success;
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
     * this function retrieve current user location data by calling shared provider
     * `getUserInfoByUserId()` method by user ID.
     */
    FriendsLocationMapPage.prototype.getUserInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sharedProvider.getUserInfoByUserId(this._userId).then(function (data) {
                            if (data.location) {
                                _this._latLng = {
                                    latitude: data.location.latitude,
                                    longitude: data.location.longitude,
                                    address: data.location.address
                                };
                            }
                            _this._isShareLocation = data.isShareLocation;
                        }).catch(function (err) {
                            console.log(err);
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
     * Get Friend Location
     * --------------------------------------------------------------
     * This function retrieve current user friends location by current user userId and latlng.
     * and the return value assign with - `this._friendsLocation`.
     */
    FriendsLocationMapPage.prototype.getFriendsLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.friendsLocationMapProvider.getFriendsLocation(this._userId, this._latLng)
                            .then(function (data) {
                            _this._friendsLocation = data;
                        }).catch(function (err) {
                            console.log(err);
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
     * Init Map
     * --------------------------------------------------------------
     * @method initMap
     * This function check current user location point is exist or not. If location is not exist
     * then retrieve user current location information otherwise call friend location data with user map.
     */
    FriendsLocationMapPage.prototype.initMap = function () {
        var _this = this;
        if (!this._latLng) {
            this.friendsLocationMapProvider.getCurrentLocation().subscribe(function (data) {
                if (data) {
                    _this._latLng = {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        address: data.address
                    };
                    _this.getFriendsLocation().then(function () {
                        _this.loadMap();
                    });
                }
            });
        }
        else {
            this.getFriendsLocation().then(function () {
                _this.loadMap();
            });
        }
    };
    /**
     * --------------------------------------------------------------
     * Load Map
     * --------------------------------------------------------------
     * @method loadMap
     */
    FriendsLocationMapPage.prototype.loadMap = function () {
        this.mapOptions = {
            center: new google.maps.LatLng(this._latLng.latitude, this._latLng.longitude),
            zoom: 8,
            duration: 5000,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            navigationControl: true,
            bearing: 50,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        this.createMarker();
    };
    /**
     * --------------------------------------------------------------
     * Marker Create
     * --------------------------------------------------------------
     * @method createMarker
     * Function for adding a marker to the page.
     */
    FriendsLocationMapPage.prototype.createMarker = function () {
        // Current User Infos
        this._userInfo = {
            uid: this._userId,
            latitude: this._latLng.latitude,
            longitude: this._latLng.longitude,
            address: this._latLng.address,
            distance: 0.0,
            userImage: this._userInfo.image,
            userName: this._userInfo.name + " (It's You)"
        };
        // Add current user data in array of friends location
        this._friendsLocation.push(this._userInfo);
        if (this._friendsLocation) {
            for (var i = 0; i < this._friendsLocation.length; i++) {
                var marker = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(this._friendsLocation[i].latitude, this._friendsLocation[i].longitude),
                    icon: {
                        url: this._friendsLocation[i].userImage,
                        scaledSize: new google.maps.Size(40, 40)
                    }
                });
                this.addInfoWindow(marker, this._friendsLocation[i]);
            }
        }
    };
    /**
     * --------------------------------------------------------------
     * Info Window
     * --------------------------------------------------------------
     * @method addInfoWindow
     * When the user clicks the marker, an info window opens.
     *
     * @param marker
     * @param locationInfo    Current User Location Infos
     */
    FriendsLocationMapPage.prototype.addInfoWindow = function (marker, locationInfo) {
        var _this = this;
        var buttons = [];
        if (locationInfo.uid === this._userId) {
            buttons = [];
        }
        else {
            buttons = [
                { text: 'Chat' },
                { text: 'Direction' }
            ];
        }
        google.maps.event.addListener(marker, 'click', function () {
            _this.utilsProvider.mapInfoWindow("<img src=\"" + locationInfo.userImage + "\"> <br/> <b>" + locationInfo.userName + "</b>", "<b>Address: </b> " + locationInfo.address + " <br/>\n        <b>Distance: </b> " + locationInfo.distance, buttons).then(function (res) {
                if (res === 'Chat') {
                    _this.modalCtrl.create('ChatPage', { userId: locationInfo.uid }).present();
                }
                else if (res === 'Direction') {
                    _this.showDirection(locationInfo);
                }
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Direction Between Two User Location
     * --------------------------------------------------------------
     * @method showDirection
     * @param location    Target User Location
     */
    FriendsLocationMapPage.prototype.showDirection = function (location) {
        var _this = this;
        this.showDirectionDetails = true;
        var origin = { lat: this._userInfo.latitude, lng: this._userInfo.longitude };
        var destination = { lat: location.latitude, lng: location.longitude };
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
                directionsDisplay.setPanel(_this.directionsRoutes.nativeElement);
            }
            else {
                console.warn(status);
            }
        });
    };
    /**
     * --------------------------------------------------------------
     * Refresh Map
     * --------------------------------------------------------------
     * @method refreshMap
     */
    FriendsLocationMapPage.prototype.refreshPage = function () {
        this.navCtrl.setRoot('FriendsLocationMapPage');
    };
    /**
     * --------------------------------------------------------------
     * Open List of Friends Location Page
     * --------------------------------------------------------------
     */
    FriendsLocationMapPage.prototype.gotoFriendsLocationList = function () {
        var _this = this;
        var modal = this.modalCtrl.create('FriendsLocationListPage', { friendList: this._friendsLocation });
        // When close the modal
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.showDirection(data);
            }
        });
        modal.present(); // Present modal
    };
    /**
     * --------------------------------------------------------------
     * Update User Share Location
     * --------------------------------------------------------------
     * @method updateShareLocation
     *
     * Onclick this function open front of user a confirm popup box, after click 'yes' option
     * this call a location provider method `updateShareLocation` by pass user current ID and
     * current status of `this.isShareLocation`.
     */
    FriendsLocationMapPage.prototype.updateShareLocation = function () {
        var _this = this;
        // Dynamic confirm popup box data
        var obj = {
            title: 'Location Status',
            message: "Are you sure? Do you want to make your location " + (this._isShareLocation === true ? 'Private' : 'Public') + "?"
        };
        // Open a confirm box by calling utils provider
        this.utilsProvider.showConfirm(obj.title, obj.message).then(function (data) {
            // If user press `yes`
            if (data === 'yes') {
                // reversed `this._isShareLocation` option value
                _this._isShareLocation = !_this._isShareLocation;
                // Call location provider method `updateShareLocation` by userId and _isShareLocation 
                _this.friendsLocationMapProvider.updateShareLocation(_this._userId, _this._isShareLocation)
                    .then(function (success) {
                    _this.utilsProvider.presentToast('Your location has been changed successfully.', 3000, 'top');
                }).catch(function (error) {
                    _this.utilsProvider.presentToast('Sorry! Failed to change the location.', 3000, 'top');
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    return FriendsLocationMapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], FriendsLocationMapPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('directionsRoutes'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], FriendsLocationMapPage.prototype, "directionsRoutes", void 0);
FriendsLocationMapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends-location-map',template:/*ion-inline-start:"C:\MobileApp\ionicbucket-socialapp\src\pages\friends-location-map\friends-location-map.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n\n  ** Friend Location Map\n-->\n<ion-header no-border>\n  <ion-navbar color="white">\n    <ion-buttons start>\n      <!-- Refresh -->\n      <button ion-button icon-only (click)="refreshPage()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <!-- Open Friends Location Page  -->\n      <button ion-button icon-only (click)="gotoFriendsLocationList()">\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Discover Map</ion-title>\n    <ion-buttons end>\n      <!-- Update Location -->\n      <button ion-button icon-only (click)="updateShareLocation()">\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Map  -->\n  <div #map id="map" [ngClass]="(showDirectionDetails == false)? \'fullmap\':\'halfmap\'"></div>\n  <!-- DIrection Details  -->\n  <ion-card *ngIf="showDirectionDetails">\n    <ion-card-header>\n      Details\n    </ion-card-header>\n    <ion-card-content>\n      <div #directionsRoutes></div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\MobileApp\ionicbucket-socialapp\src\pages\friends-location-map\friends-location-map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_utils_storage__["a" /* StorageProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_friends_location_map_friends_location_map__["a" /* FriendsLocationMapProvider */]])
], FriendsLocationMapPage);

//# sourceMappingURL=friends-location-map.js.map

/***/ })

});
//# sourceMappingURL=17.js.map