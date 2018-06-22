/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of Friends Location Map
 * File path - '../../../src/pages/friends-location-map/friends-location-map'
 */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { StorageProvider } from '../../providers/utils/storage';
import { SharedProvider } from '../../providers/shared/shared';
import { FriendsLocationMapProvider } from '../../providers/friends-location-map/friends-location-map';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-friends-location-map',
  templateUrl: 'friends-location-map.html',
})
export class FriendsLocationMapPage {

  /**
   * Contains Map Elements
   */
  map: any;

  /**
   * Current User ID
   */
  _userId: any;

  /**
   * Current User Informations
   */
  _userInfo: any;

  /**
   * Current User Location Status
   */
  _isShareLocation: Boolean;

  /**
   * User Location Latitude and Longitude
   */
  _latLng: any;

  /**
   * Array of User Friends Location
   */
  _friendsLocation: any = [];

  /**
   * Map Options
   */
  mapOptions: any;

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
  showDirectionDetails: Boolean = false;

  /**
   * Map Element
   */
  @ViewChild('map') mapElement: ElementRef;

  /**
   * Direction Routes Element
   */
  @ViewChild('directionsRoutes') directionsRoutes: ElementRef;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private utilsProvider: UtilsProvider,
    private storageProvider: StorageProvider,
    private sharedProvider: SharedProvider,
    private friendsLocationMapProvider: FriendsLocationMapProvider) {
  }

  /** Do Any Initialization */
  ngOnInit() {
    this.loadStorageData().then(() => {
      this.getUserInfos().then(() => {
        this.initMap();
      })
    })
  }

  /**
   * --------------------------------------------------------------
   * Get Localstorage User Data
   * --------------------------------------------------------------
   * 
   * @method loadStorageData This function get current user information from localstorage
   */
  async loadStorageData() {
    await this.storageProvider.get().then((success: any) => {
      this._userId = success.userId;
      this._userInfo = success;
    });
  }

  /**
   * --------------------------------------------------------------
   * Get User Information
   * --------------------------------------------------------------
   * @method getUserInfos
   * this function retrieve current user location data by calling shared provider
   * `getUserInfoByUserId()` method by user ID.
   */
  async getUserInfos() {
    await this.sharedProvider.getUserInfoByUserId(this._userId).then((data: any) => {
      if (data.location) {
        this._latLng = {
          latitude: data.location.latitude,
          longitude: data.location.longitude,
          address: data.location.address
        };
      }
      this._isShareLocation = data.isShareLocation;
    }).catch(err => {
      console.log(err);
    });
  }

  /**
   * --------------------------------------------------------------
   * Get Friend Location
   * --------------------------------------------------------------
   * This function retrieve current user friends location by current user userId and latlng.
   * and the return value assign with - `this._friendsLocation`.
   */
  async getFriendsLocation() {
    await this.friendsLocationMapProvider.getFriendsLocation(this._userId, this._latLng)
      .then((data) => {
        this._friendsLocation = data;
      }).catch(err => {
        console.log(err);
      })
  }

  /**
   * --------------------------------------------------------------
   * Init Map
   * --------------------------------------------------------------
   * @method initMap
   * This function check current user location point is exist or not. If location is not exist
   * then retrieve user current location information otherwise call friend location data with user map.
   */
  initMap() {
    if (!this._latLng) {
      this.friendsLocationMapProvider.getCurrentLocation().subscribe((data: any) => {
        if (data) {
          this._latLng = {
            latitude: data.latitude,
            longitude: data.longitude,
            address: data.address
          };
          this.getFriendsLocation().then(() => {
            this.loadMap();
          });
        }
      });
    } else {
      this.getFriendsLocation().then(() => {
        this.loadMap();
      });
    }
  }

  /**
   * --------------------------------------------------------------
   * Load Map
   * --------------------------------------------------------------
   * @method loadMap
   */
  loadMap() {
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
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.createMarker();
  }

  /**
   * --------------------------------------------------------------
   * Marker Create
   * --------------------------------------------------------------
   * @method createMarker
   * Function for adding a marker to the page.
   */
  createMarker() {
    // Current User Infos
    this._userInfo = {
      uid: this._userId,
      latitude: this._latLng.latitude,
      longitude: this._latLng.longitude,
      address: this._latLng.address,
      distance: 0.0,
      userImage: this._userInfo.image,
      userName: this._userInfo.name + " (It's You)"
    }

    // Add current user data in array of friends location
    this._friendsLocation.push(this._userInfo);

    if (this._friendsLocation) {
      for (let i = 0; i < this._friendsLocation.length; i++) {
        let marker = new google.maps.Marker({
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
  }

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
  addInfoWindow(marker, locationInfo) {
    let buttons = [];

    if (locationInfo.uid === this._userId) {
      buttons = [];
    } else {
      buttons = [
        { text: 'Chat' },
        { text: 'Direction' }
      ];
    }

    google.maps.event.addListener(marker, 'click', () => {
      this.utilsProvider.mapInfoWindow(`<img src="${locationInfo.userImage}"> <br/> <b>${locationInfo.userName}</b>`,
        `<b>Address: </b> ${locationInfo.address} <br/>
        <b>Distance: </b> ${locationInfo.distance}`, buttons
      ).then((res) => {
        if (res === 'Chat') {
          this.modalCtrl.create('ChatPage', { userId: locationInfo.uid }).present();
        } else if (res === 'Direction') {
          this.showDirection(locationInfo);
        }
      })
    });
  }

  /**
   * --------------------------------------------------------------
   * Direction Between Two User Location
   * --------------------------------------------------------------
   * @method showDirection
   * @param location    Target User Location
   */
  showDirection(location) {
    this.showDirectionDetails = true;
    let origin = { lat: this._userInfo.latitude, lng: this._userInfo.longitude };
    let destination = { lat: location.latitude, lng: location.longitude };
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);

    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(res);
        directionsDisplay.setPanel(this.directionsRoutes.nativeElement);
      } else {
        console.warn(status);
      }
    });
  }

  /**
   * --------------------------------------------------------------
   * Refresh Map
   * --------------------------------------------------------------
   * @method refreshMap
   */
  refreshPage() {
    this.navCtrl.setRoot('FriendsLocationMapPage');
  }

  /** 
   * --------------------------------------------------------------
   * Open List of Friends Location Page
   * --------------------------------------------------------------
   */
  gotoFriendsLocationList() {
    const modal = this.modalCtrl.create('FriendsLocationListPage', { friendList: this._friendsLocation });
    // When close the modal
    modal.onDidDismiss(data => {
      if (data) {
        this.showDirection(data);
      }
    });
    modal.present(); // Present modal
  }

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
  updateShareLocation() {

    // Dynamic confirm popup box data
    let obj = {
      title: 'Location Status',
      message: `Are you sure? Do you want to make your location ${this._isShareLocation === true ? 'Private' : 'Public'}?`
    }

    // Open a confirm box by calling utils provider
    this.utilsProvider.showConfirm(obj.title, obj.message).then((data) => {
      // If user press `yes`
      if (data === 'yes') {
        // reversed `this._isShareLocation` option value
        this._isShareLocation = !this._isShareLocation;

        // Call location provider method `updateShareLocation` by userId and _isShareLocation 
        this.friendsLocationMapProvider.updateShareLocation(this._userId, this._isShareLocation)
          .then((success) => {
            this.utilsProvider.presentToast('Your location has been changed successfully.', 3000, 'top');
          }).catch(error => {
            this.utilsProvider.presentToast('Sorry! Failed to change the location.', 3000, 'top');
          });
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
