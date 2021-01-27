import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppInputComponent } from './app-input/app-input.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, AppInputComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('Convert USD to YEN', () => {
    const INPUT_VALUE = 1000;
    const RESULT = INPUT_VALUE * component.USDtoYEN;
    component.inputUSD.setValue(INPUT_VALUE);
    expect(component.inputYEN.value).toBe(RESULT);
  });

  it('Convert YEN to USD', () => {
    const INPUT_VALUE = 1000;
    const RESULT = INPUT_VALUE * component.YENtoUSD;
    component.inputYEN.setValue(INPUT_VALUE);
    expect(component.inputUSD.value).toBe(RESULT);
  });
});
