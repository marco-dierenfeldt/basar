import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDataComponent } from './header-data.component';

describe('HeaderDataComponent', () => {
  let component: HeaderDataComponent;
  let fixture: ComponentFixture<HeaderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
