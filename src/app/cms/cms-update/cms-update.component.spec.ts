import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsUpdateComponent } from './cms-update.component';

describe('CmsUpdateComponent', () => {
  let component: CmsUpdateComponent;
  let fixture: ComponentFixture<CmsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
