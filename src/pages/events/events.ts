import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EventService} from '../../app/event.service';
import {Observable} from 'rxjs/Observable';


/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  event$:Observable<Object>;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private eventService : EventService
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  fetchEvents(){
		
    this.event$ = this.eventService.fetchEvents();
    console.log(this.event$);
  }	

  raiseError(){
    
    this.event$ = this.eventService.raiseError();
    
  } 


}
