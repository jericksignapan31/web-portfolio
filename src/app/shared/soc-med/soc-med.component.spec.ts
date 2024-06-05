import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocMedComponent } from './soc-med.component';

describe('SocMedComponent', () => {
  let component: SocMedComponent;
  let fixture: ComponentFixture<SocMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocMedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
