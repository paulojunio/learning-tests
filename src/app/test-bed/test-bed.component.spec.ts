import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestBedComponent } from './test-bed.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TestBedComponent', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        TestBedComponent 
      ],
      providers: []
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TestBedComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'What is broken can be reforged'`, () => {
    const fixture = TestBed.createComponent(TestBedComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('What is broken can be reforged');
  });

});
