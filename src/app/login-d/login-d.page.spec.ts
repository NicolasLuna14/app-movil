import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';


import { LoginDPage } from './login-d.page';

//describe('LoginDPage', () => {
//  let component: LoginDPage;
//  let fixture: ComponentFixture<LoginDPage>;

  
//  beforeEach(waitForAsync(() => {
//    TestBed.configureTestingModule({
//      declarations: [ LoginDPage ],
//      imports: [IonicModule.forRoot()]
//    }).compileComponents();

//    fixture = TestBed.createComponent(LoginDPage);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
//  }));

//  it('should create', () => {
//    expect(component).toBeTruthy();
//  });
//});

// npm test : inciar prueba
describe('Login docente', () => {
  let component: LoginDPage;
  let fixture: ComponentFixture<LoginDPage>;

  beforeEach(waitForAsync (async() => { 
     await TestBed.configureTestingModule({
    declarations: [LoginDPage],
    imports: [ToastController]
  }).compileComponents();

  fixture = TestBed.createComponent(LoginDPage);
  component = fixture.componentInstance;
  fixture.detectChanges();
  }));


  it ('aceptar', async() => {
  let component: LoginDPage;
  (<HTMLInputElement>document.getElementById('usuario')).value='p.@pro.duocuc.cl';
  (<HTMLInputElement>document.getElementById('password')).value='1234';
  document.getElementById('Aceptar')?.click();
  const value = (<HTMLInputElement>document.getElementById('password')).value;
  expect('password').toContain('1234')
  });
});