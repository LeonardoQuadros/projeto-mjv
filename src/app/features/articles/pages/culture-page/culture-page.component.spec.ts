import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturePageComponent } from './culture-page.component';

describe('CulturePageComponent', () => {
  let component: CulturePageComponent;
  let fixture: ComponentFixture<CulturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
