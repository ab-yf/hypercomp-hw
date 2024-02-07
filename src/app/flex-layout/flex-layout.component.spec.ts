import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutComponent } from './flex-layout.component';

describe('FlexLayoutComponent', () => {
  let component: FlexLayoutComponent;
  let fixture: ComponentFixture<FlexLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexLayoutComponent]
    });
    fixture = TestBed.createComponent(FlexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
