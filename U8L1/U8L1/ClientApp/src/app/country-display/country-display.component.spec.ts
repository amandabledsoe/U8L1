import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDisplayComponent } from './country-display.component';

describe('MenuDisplayComponent', () => {
  let component: CountryDisplayComponent;
  let fixture: ComponentFixture<CountryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
