import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamerComponent } from './spamer.component';

describe('SpamerComponent', () => {
  let component: SpamerComponent;
  let fixture: ComponentFixture<SpamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
