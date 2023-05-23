import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCulturalesComponent } from './eventos-culturales.component';

describe('EventosCulturalesComponent', () => {
  let component: EventosCulturalesComponent;
  let fixture: ComponentFixture<EventosCulturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosCulturalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
