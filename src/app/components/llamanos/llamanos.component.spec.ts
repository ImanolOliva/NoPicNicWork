import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamanosComponent } from './llamanos.component';

describe('LlamanosComponent', () => {
  let component: LlamanosComponent;
  let fixture: ComponentFixture<LlamanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlamanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlamanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
