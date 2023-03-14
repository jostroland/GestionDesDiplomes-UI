import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistreNewComponent } from './ministre-new.component';

describe('MinistreNewComponent', () => {
  let component: MinistreNewComponent;
  let fixture: ComponentFixture<MinistreNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistreNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistreNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
