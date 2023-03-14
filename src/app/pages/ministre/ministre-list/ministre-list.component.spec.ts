import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistreListComponent } from './ministre-list.component';

describe('MinistreListComponent', () => {
  let component: MinistreListComponent;
  let fixture: ComponentFixture<MinistreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
