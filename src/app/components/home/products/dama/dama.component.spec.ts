import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamaComponent } from './dama.component';

describe('DamaComponent', () => {
  let component: DamaComponent;
  let fixture: ComponentFixture<DamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
