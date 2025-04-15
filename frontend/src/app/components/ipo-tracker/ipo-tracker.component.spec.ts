import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoTrackerComponent } from './ipo-tracker.component';

describe('IpoTrackerComponent', () => {
  let component: IpoTrackerComponent;
  let fixture: ComponentFixture<IpoTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpoTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpoTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
