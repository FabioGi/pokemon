import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheInfosComponent } from './affiche-infos.component';

describe('AfficheInfosComponent', () => {
  let component: AfficheInfosComponent;
  let fixture: ComponentFixture<AfficheInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
