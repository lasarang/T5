import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LabResultsComponent } from './lab-results.component';

describe('LabResultsComponent', () => {
  let component: LabResultsComponent;
  let fixture: ComponentFixture<LabResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabResultsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabResultsComponent);
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

  it('Must not have special characters', () => {
    component.idOrden = 'Ue*f1&oBNz!2Q5L¿FbP°x';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Must not have blank spaces', () => {
    component.idOrden = '  UeSf1BNz  f2Q5LtFb';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Length must be 20 characters', () => {
    component.idOrden = 'UeSf13oBNzf2Q5LtFbPxNNNNNNNNNNNNNNNNNN';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
  });

  it('Valid idOrder', () => {
    component.idOrden = 'UeSf13oBNzf2Q5LtFbPx';
    const btn = fixture.debugElement.query(By.css('button.btn-lg'));
    btn.nativeElement.click();
    expect(component.successAlert).toBeTrue();
  });
});
