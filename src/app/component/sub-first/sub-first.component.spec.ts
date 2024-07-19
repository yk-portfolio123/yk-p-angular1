import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFirstComponent } from './sub-first.component';

describe('SubFirstComponent', () => {
  let component: SubFirstComponent;
  let fixture: ComponentFixture<SubFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
