import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsDetailComponent } from './connections-detail.component';

describe('ConnectionsDetailComponent', () => {
  let component: ConnectionsDetailComponent;
  let fixture: ComponentFixture<ConnectionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
