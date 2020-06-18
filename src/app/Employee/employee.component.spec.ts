import { AuthenticationService } from './authentication-service/authentication.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authenticationService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authenticationService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should return the value 'Salary Slip'`, () => {
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Salary Slip');
  });

  it(`should assert 'checkAuthentication' has been called`, () => {
    spyOn(authenticationService, 'checkAuthentication');
    let salSlip = component.getSalarySlip();
    expect(authenticationService.checkAuthentication).toHaveBeenCalled();
  });

  it(`should return the value 'Salary Slip' using spyOn`, () => {
    spyOn(authenticationService, 'checkAuthentication').and.returnValue(true);
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Salary Slip');
  });

  it(`should return the value 'Not Authticated' using spyOn`, () => {
    spyOn(authenticationService, 'checkAuthentication').and.returnValue(false);
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Not Authticated');
  });

  it(`should assert value for 'h1' element to be value of component`, () =>{
    component.getSalarySlipTwo();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salSlip);
  })
});
