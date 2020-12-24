import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAccommodationComponent } from './preview-accommodation.component';

describe('PreviewAccommodationComponent', () => {
  let component: PreviewAccommodationComponent;
  let fixture: ComponentFixture<PreviewAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAccommodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
