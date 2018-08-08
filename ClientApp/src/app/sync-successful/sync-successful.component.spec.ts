import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncSuccessfulComponent } from './sync-successful.component';

describe('SyncSuccessfulComponent', () => {
  let component: SyncSuccessfulComponent;
  let fixture: ComponentFixture<SyncSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
