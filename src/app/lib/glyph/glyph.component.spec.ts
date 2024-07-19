import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphComponent } from './glyph.component';

describe('GlyphComponent', () => {
  let component: GlyphComponent;
  let fixture: ComponentFixture<GlyphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlyphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlyphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
