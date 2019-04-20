import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStartComponent } from './account-start.component';

describe('AccountStartComponent', () => {
  let component: AccountStartComponent;
  let fixture: ComponentFixture<AccountStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
