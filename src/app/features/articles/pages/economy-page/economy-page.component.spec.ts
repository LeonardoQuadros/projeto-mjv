import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyPageComponent } from './economy-page.component';

describe('EconomyPageComponent', () => {
  let component: EconomyPageComponent;
  let fixture: ComponentFixture<EconomyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
