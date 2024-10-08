import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStatementComponent } from './mission-statement.component';

describe('MissionStatementComponent', () => {
  let component: MissionStatementComponent;
  let fixture: ComponentFixture<MissionStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
