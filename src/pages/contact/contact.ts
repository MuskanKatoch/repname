import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goto(){
    this.navCtrl.push(CommentsPage);
  }

}
