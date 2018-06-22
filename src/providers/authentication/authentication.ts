/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a provider of authentication,
 * All the authentication methods are written in this file. 
 * Which connects directly to the Firebase database
 * File path - '../../../src/providers/authentication/authentication'
 */

import { Injectable } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { StorageProvider } from '../../providers/utils/storage';
import { SharedProvider } from '../shared/shared';
import { UserProvider } from '../user/user';

@Injectable()
export class AuthenticationProvider {

  constructor(private platform: Platform,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private fb: Facebook,
    private storageProvider: StorageProvider,
    private app: App,
    private sharedProvider: SharedProvider,
    private userProvider: UserProvider,
  ) { }

  /**
   * --------------------------------------------------------------
   * User Registration
   * --------------------------------------------------------------
   * @method  registration
   * @param   credentials
   * @returns { Observable }
   */
  registration = (credentials: any) => {

    let userId: any; // User ID
    let userObj: any = {}; // User Data

    // Create new Observable
    return Observable.create(observer => {
      return this.afAuth.auth
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((user) => {

          // The new user uid replace with this userId
          userId = user.uid;

          // Make a user object
          userObj = {
            name: credentials.displayName, // User name
            email: user.email, // User email address
            emailVerified: false, // Initially define email verified to false
            provider: 'email', // Define Provider to `email` 
            image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/socialapp/profile-photo.png', // User default image
            uid: userId, // User Id
            isShareLocation: credentials.isShareLocation // Location Status
          }
          if (credentials.location) {
            userObj.location = credentials.location;
          }

          // Update User Information
          this.db.database.ref(`/users/${userId}`).set(userObj);

          // Add this user in this user following list
          this.sharedProvider.addUserInFollowingList(userId, userId);

          // Save user information in localstorage
          this.storageProvider.set(userId, userObj.name, userObj.email, userObj.image)
            .then(() => {
              observer.next('success');
            }, function (error) {
              observer.error(error);
            });
        })
        // Handle authentication error
        .catch((error: any) => {
          if (error) {
            switch (error.code) {
              case 'INVALID_EMAIL':
                observer.error('E-mail invalid.');
                break;
              case 'EMAIL_TAKEN':
                observer.error('This email already taken');
                break;
              case 'NETWORK_ERROR':
                observer.error('NETWORK ERROR');
                break;
              default:
                observer.error(error);
            }
          }
        });
    });
  }

  /**
   * --------------------------------------------------------------
   * Login With User Email Address
   * --------------------------------------------------------------
   * @method    loginWithEmail
   * @param     credentials
   * @returns   { Observable }
   */
  loginWithEmail = (email: string, password: string) => {

    let userId: any; // UserId

    // Create new Observable
    return Observable.create(observer => {

      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((data: any) => {

          // The new user uid replace with this userId
          userId = data.uid;

          // Get user Information
          this.sharedProvider.getUserInfoByUserId(userId)
            .then((user: any) => {

              // Save user information in localstorage
              this.storageProvider.set(userId, user.name, user.email, user.image).then(() => {
                observer.next(data);
              }, function (error) {
                observer.error(error);
              });
            })
            .catch((err: any) => {
              observer.error(err);
            });
        })
        .catch((err: any) => {
          observer.error(err);
        });
    });
  }

  /**
   * --------------------------------------------------------------
   * Login With Facebook
   * --------------------------------------------------------------
   * @method  loginWithFacebook
   * @returns { Observable }
   */
  loginWithFacebook = () => {

    let userObj: any = {}; // User Object

    // Create a new Observable
    return Observable.create(observer => {

      // For the Cordova platform
      if (this.platform.is('cordova')) {

        // Call Facebook’s native plugin to get the user to log-in with Facebook.
        return this.fb.login(['public_profile', 'email'])
          .then((res: any) => {

            // Get facebook credential information
            const provider = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

            // Get the token from facebook auth provider and sign in with this credentials in firebase
            return this.afAuth.auth.signInWithCredential(provider)
              .then((res: any) => {

                userObj = {
                  name: res.displayName,
                  email: res.email,
                  provider: 'facebook',
                  image: res.photoURL,
                  uid: res.uid
                }

                // Update user Information
                this.userProvider.updateUserData(userObj)
                  .then(() => {
                    // Save user information in localstorage
                    this.storageProvider.set(userObj.uid, userObj.name, userObj.email, userObj.image)
                      .then(() => {
                        observer.next();
                      }, function (error) {
                        observer.error(error);
                      });
                  });
              })
              .catch((err: any) => {
                observer.error(err);
              });
          })
          .catch((err: any) => {
            observer.error(err);
          });
      }
      // Not Cordova Platform
      else {
        // To sign in with a pop-up window, call signInWithPopup
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .then((res) => {
            // Make signed-in user info.
            userObj = {
              name: res.user.displayName,
              email: res.user.email,
              provider: 'facebook',
              image: res.user.photoURL,
              uid: res.user.uid
            }

            // Update user information
            this.userProvider.updateUserData(userObj).then(() => {
              // Save user information in localstorage
              this.storageProvider.set(userObj.uid, userObj.name, userObj.email, userObj.image).then(() => {
                observer.next();
              }, function (error) {
                observer.error(error);
              });
            });
          })
          .catch((err: any) => {
            observer.error(err);
          });
      }
    });
  }

  /***
   * --------------------------------------------------------------
   * Send Password Reset Request to User Email Address
   * --------------------------------------------------------------
   * @method    sendPasswordResetEmail
   * @param     email     User Current Email Address
   * @returns   { Observable }
   */
  sendPasswordResetEmail(email) {
    return Observable.create(observer => {
      firebase.auth().sendPasswordResetEmail(email).then(function (res) {
        observer.next('We will email you a link which will allow you to reset your password.');
      }, function (error) {
        observer.error(error);
      });
    });
  }

  /**
   * --------------------------------------------------------------
   * Update Password
   * --------------------------------------------------------------
   * @method updatePassword  This function re-authenticate with user credentials
   * and then update user password.
   * @param oldPassword      User Current Password
   * @param newPassword      User New Password
   */
  updatePassword(oldPassword, newPassword) {
    const promise = new Promise((resolve, reject) => {

      // Get current user ID
      let user = this.afAuth.auth.currentUser;

      // Get credentials of current user
      const credentials = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);

      // Prompt the user to re-provide their sign-in credentials
      user.reauthenticateWithCredential(credentials).then((res) => {

        // Update user password
        user.updatePassword(newPassword).then((updateRes) => {
          resolve(updateRes);
        }).catch(err => {
          reject(err);
        });
      }).catch(err => {
        reject(err);
      });
    });
    return promise;
  };

  /**
   * --------------------------------------------------------------
   * Update Email Address
   * --------------------------------------------------------------
   * @method updateEmail  This function re-authenticate with user credentials
   * and then update user email address.
   * @param oldEmail      User Current Email Address
   * @param password      User Current Password
   * @param newEmail      User New Email Address
   */
  updateEmail(oldEmail, password, newEmail) {

    // Get current user ID
    let user = this.afAuth.auth.currentUser;

    let promise = new Promise((resolve, reject) => {

      // Get credentials of current user
      const credentials = firebase.auth.EmailAuthProvider.credential(oldEmail, password);

      // Prompt the user to re-provide their sign-in credentials
      user.reauthenticateWithCredential(credentials).then((res) => {

        // Update New Email
        user.updateEmail(newEmail).then((updateRes) => {
          let obj = {
            uid: user.uid,
            email: newEmail
          }
          // Update user data in effective fields
          this.userProvider.updateUserData(obj).then(() => {
            resolve(updateRes);
          }).catch(err => {
            reject(err);
          });
        }).catch(err => {
          reject(err);
        });
      }).catch(err => {
        reject(err);
      })
    });
    return promise;
  }

  /**
   * --------------------------------------------------------------
   * Logout
   * --------------------------------------------------------------
   * @method logout
   */
  logout() {
    this.storageProvider.remove()
      .then(() => {
        // Go back to the landing page
        this.app.getRootNav().setRoot('LeadLandingPage');
        // Signout current user
        this.afAuth.auth.signOut();
        // Reload information of current user
        this.afAuth.auth.currentUser.reload();
      });
  }
}
