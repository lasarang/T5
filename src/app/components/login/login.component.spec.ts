import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' Login successful ', () =>{
    component.email ='mauricioortizlascano@gmail.com';
    component.password = '12345678';

    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();

    expect(component.unsuccessAlert).toBeFalse();
  });

  it(' Failed login, worng password ', () =>{
    component.email ='mauricioortizlascano@gmail.com';
    component.password = '12345679';

    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();

    expect(component.unsuccessAlert).toBeTrue();
  });

  it(' Failed login, invalid email ', () =>{
    component.email ='@gmail.com';
    component.password = 'error123';

    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();

    expect(component.unsuccessAlert).toBeTrue();
  });

  it(' Failed login, email not registered ', () =>{
    component.email ='noregistered@gmail.com';
    component.password = 'error123';

    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();

    expect(component.unsuccessAlert).toBeTrue();
  });
});
