import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {

	constructor(private http: HttpClient){}


	fetchEvents() : Observable<Object>{
		return this.http.get('https://tsh-app.firebaseio.com/events.json');
	}

	raiseError() : Observable<Object>{
		return this.http.get('/assets/data/unavailableendpoint.json');
	}	
}