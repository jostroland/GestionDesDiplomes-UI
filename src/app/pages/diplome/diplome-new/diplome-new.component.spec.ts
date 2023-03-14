import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeNewComponent } from './diplome-new.component';

describe('DiplomeNewComponent', () => {
  let component: DiplomeNewComponent;
  let fixture: ComponentFixture<DiplomeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomeNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
