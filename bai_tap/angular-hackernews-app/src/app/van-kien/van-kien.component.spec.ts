import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanKienComponent } from './van-kien.component';

describe('VanKienComponent', () => {
  let component: VanKienComponent;
  let fixture: ComponentFixture<VanKienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanKienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanKienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
