import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromContactComponent } from './from-contact.component';

describe('FromContactComponent', () => {
  let component: FromContactComponent;
  let fixture: ComponentFixture<FromContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
