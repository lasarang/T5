import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Empty fields', () => {
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Only enter alphabetic characters in Nombres', () => {
    component.newUser.nombres = 'Emiliano12';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Only enter alphabetic characters in Apellidos', () => {
    component.newUser.apellidos = 'del Pozo14';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Only enter numeric characters in Telefono', () => {
    component.newUser.telefono = 'holi';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Only enter numeric characters in Cedula', () => {
    component.newUser.cedula = 'boli';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Must not exceed length in Nombres', () => {
    component.newUser.nombres =
      'Emiliano Salidoooooooooooooooooooooooooooooooooooooo';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Must not exceed length in Apellidos', () => {
    component.newUser.apellidos =
      'del Pozo Oscurooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Must not exceed length in Telefono', () => {
    component.newUser.apellidos = '09123456789';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Must not exceed length in Cedula', () => {
    component.newUser.apellidos = '1703456789';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Must not exceed length in Password or RepeatPassword', () => {
    component.password = 'hola123456789123456789';
    component.repeatPassword = 'hola123456789123456789';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Do not enter minimum length in Password or RepeatPassword', () => {
    component.password = 'hola12';
    component.repeatPassword = 'hola12';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Telefono does not start with 09', () => {
    component.newUser.telefono = '1112345678';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Invalid Email', () => {
    component.newUser.email = '@hotmail.es';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Password and RepeatPassword are not the same', () => {
    component.password = 'hola12345';
    component.repeatPassword = 'hola1234';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Only enter alphabetic characters in Apellidos', () => {
    component.newUser.apellidos = 'del Pozo14';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Valid form', () => {
    component.newUser.nombres = 'Emiliano Salido';
    component.newUser.apellidos = 'del Pozo Oscuro';
    component.newUser.telefono = '0912345678';
    component.newUser.email = 'espo@hotmail.es';
    component.newUser.cedula = '170456789';
    component.newUser.direccion = 'Isla Marginada Invasión 5';
    component.password = 'hola12345';
    component.repeatPassword = 'hola12345';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
    expect(component.successAlert).toBeTrue();
  });
});
