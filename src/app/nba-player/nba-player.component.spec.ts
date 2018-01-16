import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayerComponent } from './nba-player.component';

describe('NbaPlayerComponent', () => {
  let component: NbaPlayerComponent;
  let fixture: ComponentFixture<NbaPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
