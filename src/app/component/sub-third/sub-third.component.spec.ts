import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubThirdComponent } from './sub-third.component';

describe('SubThirdComponent', () => {
  let component: SubThirdComponent;
  let fixture: ComponentFixture<SubThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubThirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
