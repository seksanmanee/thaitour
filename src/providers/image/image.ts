/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of camera image
 * File path - '../../../src/providers/image/image'
 */

// import modules
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { UtilsProvider } from '../../providers/utils/utils';
import * as firebase from 'firebase';

@Injectable()
export class ImageProvider {


  public base64Image: string; // base64 image path
  storageRef: any; // storage reference

  constructor(
    private camera: Camera,
    private utilsProvider: UtilsProvider) {

    // Define Firebase storage ref
    this.storageRef = firebase.storage().ref();
  }

  /**
   * Open gallery option of user device
   * @param uid Current userId
   * @param type Identify page name
   */
  openGallery(uid, type) {

    let imageRef: any; // Will be set any kind of image reference path

    // Define promise
    let promise = new Promise((resolve, reject) => {

      // Define camera options
      const cameraOptions: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: true
      };

      // Take a picture, or load one from the library.
      this.camera.getPicture(cameraOptions).then((data: any) => {

        // After pick one picture from the library, call a loader to process the next steps
        this.utilsProvider.presentLoading();

        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64Image = "data:image/jpeg;base64," + data;

        // Create a custom filename
        const filename = Math.floor(Date.now() / 1000);

        // Check the type option
        // Get image reference on which we now put our image
        if (type === 'post') {
          imageRef = this.storageRef.child(`${uid}/post/images/${filename}.jpg`);
        } else if (type === 'profile') {
          imageRef = this.storageRef.child(`${uid}/profile/images/${filename}.jpg`);
        }

        // Use the putString() method that passing the base64 string and upload to firebase storage
        imageRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
          // On the image reference we call the getDownloadURL function for getting the image URL
          imageRef.getDownloadURL().then(url => {
            // Resolve this url to specific component
            resolve(url);
          });
        }, err => {
          reject(err);
        });
      }).catch(err => {
        reject(err);
      });
    });
    return promise;
  }

  /**
   * Open camera of user device
   * @param uid Current userId
   * @param type Identify page name
   */
  openCamera(uid, type) {

    let imageRef: any; // Will be set any kind of image reference path

    // Define promise
    let promise = new Promise((resolve, reject) => {

      // Define camera options
      const cameraOptions: CameraOptions = {
        quality: 95,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: true
      };

      // Take a picture, or load one from the library.
      this.camera.getPicture(cameraOptions).then((data: any) => {

        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64Image = "data:image/jpeg;base64," + data;

        // Create a custom filename
        const filename = Math.floor(Date.now() / 1000);

        // Check the type option
        // Get image reference on which we now put our image
        if (type === 'post') {
          imageRef = this.storageRef.child(`${uid}/post/images/${filename}.jpg`);
        } else if (type === 'profile') {
          imageRef = this.storageRef.child(`${uid}/profile/images/${filename}.jpg`);
        }

        // Use the putString() method that passing the base64 string and upload to firebase storage
        imageRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
          // On the image reference we call the getDownloadURL function for getting the image URL
          imageRef.getDownloadURL().then(url => {
            // Resolve this url to specific component
            resolve(url);
          });
        }, err => {
          reject(err);
        });
      }).catch((err: any) => {
        if (err) {
          reject(err);
        }
      });
    });
    return promise;
  }
}
