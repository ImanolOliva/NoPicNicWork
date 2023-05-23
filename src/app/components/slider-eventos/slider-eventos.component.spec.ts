import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEventosComponent } from './slider-eventos.component';

describe('SliderEventosComponent', () => {
  let component: SliderEventosComponent;
  let fixture: ComponentFixture<SliderEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
