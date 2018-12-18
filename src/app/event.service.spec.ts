import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EventService } from  './event.service';



describe('The EventService', () => {

	console.log('The EventService')	;		

	beforeEach(() => {
		TestBed.configureTestingModule({
		  imports: [HttpClientTestingModule],
		  providers: [
		      EventService
		  ]
		});
	});

  it('should fetch a list of events', inject(
    [EventService, HttpTestingController],
    (eventService: EventService, httpMock: HttpTestingController) => {

    // execute the call
    eventService
      .fetchEvents()
      .subscribe(events => {
      	events = <Array<any>>events;
      	expect(events.length).toBe(7);
        expect(events[0].title).toBe('Amsterdam bike tour');
      });

    const req = httpMock.expectOne('https://tsh-app.firebaseio.com/events.json', 'call to ppl api');

    expect(req.request.method).toBe('GET');

    req.flush([
      {
        title: 'Amsterdam bike tour'
      },
      {
        title: 'Amsterdam bike tour'
      },
      {
        title: 'Amsterdam bike tour'
      },
      {
        title: 'FoodTruck Festival'
      },
      {
        title: 'cocktail night @ the pool'
      },
      {
        title: 'pizza night @ the pool'
      },
      {
        title: 'Amsterdam bike tour'
      }
    ]);

    httpMock.verify();
  }));

});