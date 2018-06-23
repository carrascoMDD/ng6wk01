
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAndSideComponent } from './nav-bar-and-side.component';

describe('NavBarAndSideComponent', () => {
  let component: NavBarAndSideComponent;
  let fixture: ComponentFixture<NavBarAndSideComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAndSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarAndSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
