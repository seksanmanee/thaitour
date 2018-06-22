/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of location map,
 * Related friends location map methods are written in this file. 
 * File path - '../../../src/providers/friends-location-map/friends-location-map'
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';
import { SharedProvider } from '../../providers/shared/shared';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FriendsLocationMapProvider {
  dbRef: any;

  constructor(public http: Http,
    public geolocation: Geolocation,
    private afDB: AngularFireDatabase,
    private sharedProvider: SharedProvider) {
    this.dbRef = this.afDB.database.ref();
  }

  /**
   * --------------------------------------------------------------
   * Get User Current Location
   * --------------------------------------------------------------
   * @method getCurrentLocation
   * Get Current Location using freegeoip.net because
   * It's fast and quite accurate
   */
  getCurrentLocation() {

    // `api1` - Public HTTP API to search the geolocation of IP addresses
    const api1 = 'http://freegeoip.net/json/';
    // `api2` - Google API get formatted_address from google maps api json
    const api2 = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';

    return Observable.create(observer => {
      this.http.get(api1).map(res => res.json())
        .subscribe((position) => {
          this.http.get(api2 + position.latitude + ',' + position.longitude + '&sensor=true')
            .map(res => res.json())
            .subscribe(res => {
              let address = res.results[0];
              if (address) {
                let location = {
                  address: address.formatted_address,
                  latitude: position.latitude,
                  longitude: position.longitude
                };
                observer.next(location);
              }
            });
        });
    });
  }

  /**
   * --------------------------------------------------------------
   * Retrieve User Friends Location
   * --------------------------------------------------------------
   * @method getFriendsLocation
   * This funtion collect friends location data from database and apply Haversine rules to calculate
   * users location between current user location and target user.
   * 
   * @param uid                 Current User ID
   * @param currentLocation     Current User Location
   */
  getFriendsLocation(uid, currentLocation) {
    let promise = new Promise((resolve, reject) => {
      this.afDB.list(`/friends-location/${uid}`).valueChanges().subscribe((list: any) => {
        let friendsLocation = list.filter(elm => elm.isShareLocation == true);
        const locations = this.applyHaversine(currentLocation, friendsLocation);
        locations.sort((locationA, locationB) => {
          return locationA.distance - locationB.distance;
        });
        resolve(locations);
      }, error => {
        reject(error);
      });
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Haversine Formula
   * --------------------------------------------------------------
   * @method applyHaversine
   * This function calculate great-circle distances between two points on a sphere
   * from their longitudes and latitudes.
   * @param currentLocation     Point of Current User Location
   * @param friendsLocation     Point of Target User Location
   */
  applyHaversine(currentLocation, friendsLocation) {
    let usersLocation = {
      lat: currentLocation.latitude,
      lng: currentLocation.longitude
    };
    friendsLocation.map((location) => {
      let placeLocation = {
        lat: location.latitude,
        lng: location.longitude
      };
      location.distance = this.getDistanceBetweenPoints(
        usersLocation,
        placeLocation,
        'miles'
      ).toFixed(2);
    });
    return friendsLocation;
  }

  /**
   * --------------------------------------------------------------
   * Distance Between Points
   * --------------------------------------------------------------
   * @method getDistanceBetweenPoints
   * To find the distance between two points (x1,y1) and (x2,y2)
   */
  getDistanceBetweenPoints(start, end, units) {
    let earthRadius = {
      miles: 3958.8,
      km: 6371
    };
    let R = earthRadius[units || 'miles'];

    let lat1 = start.lat;
    let lon1 = start.lng;
    let lat2 = end.lat;
    let lon2 = end.lng;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;
  }

  toRad(x) {
    return x * Math.PI / 180;
  }

  /**
   * --------------------------------------------------------------
   * Update User Share Location Status
   * --------------------------------------------------------------
   * @method updateShareLocation    This function update user share location status.
   * Share location will be updated on user own profile `users` and user friends locaton `friends-location`
   * @param uid                     Current User ID
   * @param isShareLocation         User Location Share Status 
   */
  updateShareLocation(uid, isShareLocation) {
    let fannedOutData = {};
    let promise = new Promise((resolve, reject) => {
      // Update user own record
      fannedOutData['/users/' + uid + '/' + 'isShareLocation'] = isShareLocation;
      this.dbRef.ref.update(fannedOutData);

      // Update user friends location
      this.sharedProvider.getUserFriendIds(uid).then((friends: any) => {
        friends.forEach(element => {
          fannedOutData['/friends-location/' + element + '/' + uid + '/' + 'isShareLocation'] = isShareLocation;
          this.dbRef.ref.update(fannedOutData);
        });
      });
      resolve('success');
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Add Friend Location
   * --------------------------------------------------------------
   * @method addFriendLocationById
   * @param uid1 
   * @param uid2 
   */
  addFriendLocationById(uid1, uid2) {
    let user1Info: any = {};
    let user2Info: any = {};

    let promise = new Promise((resolve, reject) => {
      this.sharedProvider.getUserInfoByUserId(uid1).then((user1: any) => {
        this.sharedProvider.getUserInfoByUserId(uid2).then((user2: any) => {

          if (user1) {
            user1Info.uid = uid1;
            user1Info.userName = user1.name;
            user1Info.userImage = user1.image;
            if (user1.isShareLocation && user1.location) {
              user1Info.latitude = user1.location.latitude;
              user1Info.longitude = user1.location.longitude;
              user1Info.address = user1.location.address;
              user1Info.isShareLocation = user1.isShareLocation;
            }
          }
          if (user2) {
            user2Info.uid = uid2;
            user2Info.userName = user2.name;
            user2Info.userImage = user2.image;
            if (user2.isShareLocation && user2.location) {
              user2Info.latitude = user2.location.latitude;
              user2Info.longitude = user2.location.longitude;
              user2Info.address = user2.location.address;
              user2Info.isShareLocation = user2.isShareLocation;
            }
          }
          this.afDB.database.ref(`/friends-location/${uid2}/${uid1}`).update(user1Info);
          this.afDB.database.ref(`/friends-location/${uid1}/${uid2}`).update(user2Info);
          resolve('success');
        }).catch(err => {
          reject(err);
        });
      }).catch(err => {
        reject(err);
      });
    });
    return promise;
  }
}
