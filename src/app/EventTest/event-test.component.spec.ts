import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTestComponent } from './event-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should 'Add clicks' buttons is clicked`, () => {
    spyOn(component, 'addClick');
    const h1 = debug.query(By.css('#countText'));
    const btn = debug.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText));
    expect(component.addClick).toHaveBeenCalledTimes(1);
  });

  it(`should 'Remove clicks' buttons is clicked`, () => {
    spyOn(component, 'removeClick');
    const h1 = debug.query(By.css('#countText'));
    const btn = debug.query(By.css('#btnRemoveClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText));
    expect(component.removeClick).toHaveBeenCalledTimes(1);
  });
});
