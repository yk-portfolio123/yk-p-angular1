import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSecondComponent } from './sub-second.component';

describe('SubSecondComponent', () => {
  let component: SubSecondComponent;
  let fixture: ComponentFixture<SubSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
