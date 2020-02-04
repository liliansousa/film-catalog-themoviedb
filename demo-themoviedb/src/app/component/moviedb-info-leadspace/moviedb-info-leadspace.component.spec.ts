import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedbInfoLeadspaceComponent } from './moviedb-info-leadspace.component';

describe('MoviedbInfoLeadspaceComponent', () => {
  let component: MoviedbInfoLeadspaceComponent;
  let fixture: ComponentFixture<MoviedbInfoLeadspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedbInfoLeadspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedbInfoLeadspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
