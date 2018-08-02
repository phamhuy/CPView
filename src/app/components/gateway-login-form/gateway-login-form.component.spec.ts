import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayLoginFormComponent } from './gateway-login-form.component';

describe('GatewayLoginFormComponent', () => {
  let component: GatewayLoginFormComponent;
  let fixture: ComponentFixture<GatewayLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewayLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
