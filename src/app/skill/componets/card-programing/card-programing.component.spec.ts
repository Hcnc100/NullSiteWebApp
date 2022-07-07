import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProgramingComponent } from './card-programing.component';

describe('CardProgramingComponent', () => {
  let component: CardProgramingComponent;
  let fixture: ComponentFixture<CardProgramingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProgramingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProgramingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
