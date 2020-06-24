import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

class MockAuthService extends AuthService{ // Mock do AuthService
  public isAutheticated(){
    return true;
  }
}


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedAuthService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [AuthService]
    })
      .compileComponents();
    
    TestBed.overrideComponent( //criando um mock do Authservice, dando um subscrever na authservice do loginComponent
      LoginComponent,
      {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
    );

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedAuthService = TestBed.get(AuthService); //Crindo uma instancia do authservice utilizando o TestBed

  }));
  /**
   * Três maneiras de testar serviçõs, a primeira é utilizando um testBed comum somente pegando o serviçõ e utilizando spyOns para controlar os metodos
   * Segundo é criar uma instancia não global dentro de um metodo, para poder manipula-la independentemente do TestBed
   * A terceira é um maneira de utilizar um mock para utilizar do authService, sem que ele seja chamado de verdade, igual é feito no spyOn
   */

  it('should check the service instansiated using TestBed.get', () => {
    expect(testBedAuthService instanceof AuthService).toBeTruthy();
  });
  
  it('should inject service using inject function and check its instance',
   inject([AuthService],(injectedService: AuthService)=>{
    expect(injectedService).toBeTruthy();
    expect(injectedService instanceof AuthService).toBeTruthy();
  }));

  it('should test injected service injected using component overriding', ()=>{
    let overRiddenService = fixture.debugElement.injector.get(AuthService);
    expect(overRiddenService instanceof MockAuthService).toBeTruthy();
  });


});
