import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePainelComponent } from './simple-painel.component';

describe('SimplePainelComponent', () => {
  let component: SimplePainelComponent;
  let fixture: ComponentFixture<SimplePainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
