import { ComponentFixture, TestBed } from '@angular/core/testing';

import { createComponent } from './create.component';

describe('createComponent', () => {
  let component: createComponent;
  let fixture: ComponentFixture<createComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ createComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(createComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
