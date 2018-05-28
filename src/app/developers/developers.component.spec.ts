
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersComponent } from './developers.component';

describe('DevelopersComponent', () => {
  let component: DevelopersComponent;
  let fixture: ComponentFixture<DevelopersComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
