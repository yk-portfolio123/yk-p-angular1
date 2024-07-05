import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDBComponent } from './connect-db.component';

describe('ConnectDBComponent', () => {
  let component: ConnectDBComponent;
  let fixture: ComponentFixture<ConnectDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
