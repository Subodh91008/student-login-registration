import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisstrationComponent } from './regisstration.component';

describe('RegisstrationComponent', () => {
  let component: RegisstrationComponent;
  let fixture: ComponentFixture<RegisstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisstrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
