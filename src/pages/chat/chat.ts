/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of chat page
 * File path - '../../../src/pages/chat/chat'
 */

import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {
  tab1: string;
  tab2: string;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController) { }

  /** Do any initialization */
  ngOnInit() {
    this.tab1 = 'ChatRecentHistoryPage';
    this.tab2 = 'ChatContactsPage';
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
