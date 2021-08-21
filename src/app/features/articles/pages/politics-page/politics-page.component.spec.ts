import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsPageComponent } from './politics-page.component';

describe('PoliticsPageComponent', () => {
  let component: PoliticsPageComponent;
  let fixture: ComponentFixture<PoliticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
