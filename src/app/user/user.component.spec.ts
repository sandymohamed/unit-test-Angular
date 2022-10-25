// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { browser } from 'protractor';
// import { UserserviceService } from '../services/userservice.service';

// import { UserComponent } from './user.component';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ UserComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.debugElement.componentInstance;
//     fixture.detectChanges();
//   });

//   beforeAll(function() {
//     browser.ignoreSynchronization = true;
//   });


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


//   // it('first click', async(() => {
//   //   spyOn(component , 'clicked');
  
//   //   let button = fixture.debugElement.nativeElement.querySelector('#button');
//   //   button.click();
  
//   //   fixture.whenStable().then(() => {
//   //     expect(component.isOn).toBe(false);
//   //   });

//   // }));


//   it('first click', async(() => {
//     spyOn(component , 'clicked');
  
//     let button = fixture.debugElement.nativeElement.querySelector('#button');
//     // button.click().click();
//     browser.actions().doubleClick( button ).perform().then(function () {
//       expect(component.isOn).toBe(true);
//     });
    
//     // fixture.whenStable().then(() => {
//     //   expect(component.isOn).toBeFalsy();
//     // });

//   }));



//   // it('sec click', async(() => {
//   //   spyOn(component , 'clicked');
  
//   //   let button = fixture.debugElement.nativeElement.querySelector('#button');
//   //   button.triggerEventHandler("dblclick", new MouseEvent("dblclick"));

//   //   fixture.detectChanges();
  
//   //   fixture.whenStable().then(() => {
//   //     expect(component.isOn).toBeFalsy();
//   //   });



    
//   // }));




//   // it('first click', () => {
//   //   expect(component.isOn).toBeTrue();
//   // });

//   // it('first click', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.debugElement.componentInstance;
//   //   expect(app).toBeTruthy();
//   // });

//   // it(`should have as title 'AngularTestCode'`, () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.debugElement.componentInstance;
//   //   expect(app.title).toEqual('RudraTech2014');
//   // });



// });

// ///////////////////////////



