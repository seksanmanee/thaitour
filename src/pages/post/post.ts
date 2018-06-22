/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of post page
 * File path - '../../../src/pages/post/post'
 */

import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { LocalStorageUserData } from '../../models/localstorage'; // localstorage data Model
import { Post } from '../../models/post'; // Post Model
import { UtilsProvider } from '../../providers/utils/utils'; // Utils provider
import { PostProvider } from '../../providers/post/post'; // Post Provider
import { ImageProvider } from '../../providers/image/image'; // Image Provider
import { StorageProvider } from '../../providers/utils/storage'; // Storage Provider

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  private userObj: any = {} as LocalStorageUserData;
  private postModel = {} as Post;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storageProvider: StorageProvider,
    private postProvider: PostProvider,
    private imageProvider: ImageProvider,
    private utilsProvider: UtilsProvider) { }


  /**
   * Do any initialization
   */
  ngOnInit() {
    this.getPostInformation();
    this.loadStorageData();
  }

  /**
   * --------------------------------------------------------------
   * Get localstorage user data
   * --------------------------------------------------------------
   * 
   * @method loadStorageData This function get userId from localstorage
   */
  loadStorageData() {
    this.storageProvider.get().then((success: any) => {
      this.userObj = success;
    });
  }

  /**
   * --------------------------------------------------------------
   * Get & Set Post data from navParams
   * --------------------------------------------------------------
   */
  getPostInformation() {
    // Get post information from navParams
    if (this.navParams.get('postInfo')) {
      this.postModel = this.navParams.get('postInfo');
    }
  }

  /**
   * --------------------------------------------------------------
   * Create a New Post
   * --------------------------------------------------------------
   * @method newPost
   */
  async newPost() {

    // Define new post data's
    this.postModel.userImage = this.userObj.image;
    this.postModel.userName = this.userObj.name;
    this.postModel.uid = this.userObj.userId;
    this.postModel.isLike = false;
    this.postModel.status = true;
    this.postModel.createdDate = new Date();

    try {
      // Present a loading
      this.utilsProvider.presentLoading();

      // Call a post provider to create a new post
      await this.postProvider
        .createPost(this.postModel)
        .then(success => {
          this.utilsProvider.presentToast('Your post successfully published!', 3000, 'top');
          this.viewCtrl.dismiss({ success: true });
          this.postModel.featureImage = '';
          this.postModel.text = '';
          this.utilsProvider.hideLoading();
        })
        .catch(err => {
          this.utilsProvider.hideLoading();
        });
    }
    catch (err) {
      this.utilsProvider.hideLoading();
    }
  }

  /**
   * --------------------------------------------------------------
   * Update Post
   * --------------------------------------------------------------
   * 
   * @method updatePost   This function updates post in the database
   */
  async updatePost() {
    this.postModel.updatedDate = new Date();
    try {
      // Present a loading
      this.utilsProvider.presentLoading();

      // Call a post provider to update a post
      await this.postProvider
        .updatePost(this.postModel)
        .then(success => {
          this.postModel.featureImage = '';
          this.postModel.text = '';
          this.utilsProvider.hideLoading();
          this.utilsProvider.presentToast('Your post successfully updated!', 3000, 'top');
          this.viewCtrl.dismiss({ success: true });
        })
        .catch(err => {
          this.utilsProvider.hideLoading();
        });
    }
    catch (err) {
      this.utilsProvider.hideLoading();
    }
  }

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
  openCameraGallery() {
    try {
      this.imageProvider
        .openGallery(this.userObj.userId, 'post')
        .then((success: any) => {
          this.postModel.featureImage = success;
          this.utilsProvider.hideLoading();
        }).catch(err => {
          this.utilsProvider.hideLoading();
        });
    }
    catch (err) {
      console.log(err)
    }
  }

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
  openCamera() {
    try {
      this.imageProvider
        .openCamera(this.userObj.userId, 'post')
        .then((success: any) => {
          this.postModel.featureImage = success;
          this.utilsProvider.hideLoading();
        }).catch((err: any) => {
          this.utilsProvider.hideLoading();
        });
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * Close the current view page
   */
  dismiss() {
    this.viewCtrl.dismiss({ success: false });
  }

}
