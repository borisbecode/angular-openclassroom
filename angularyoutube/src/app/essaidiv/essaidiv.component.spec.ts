import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaidivComponent } from './essaidiv.component';

describe('EssaidivComponent', () => {
  let component: EssaidivComponent;
  let fixture: ComponentFixture<EssaidivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssaidivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssaidivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
