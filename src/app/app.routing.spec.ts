import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterLinkWithHref, ActivatedRoute, convertToParamMap } from '@angular/router';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


describe('AppComponent Routing Example', () => {
  let router: Router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let location: Location;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [           
        AppComponent,
     
      ],
   
    }).compileComponents();
  }));

  beforeEach(() => {

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;

    router.initialNavigation();
  });



  it('navigate to login', fakeAsync(() => {
    fixture.detectChanges();
    let link = debugElement.query(By.directive(RouterLinkWithHref));
    link.nativeElement.click();
    tick();
    expect(location.path()).toBe('/login');
  }));


});
