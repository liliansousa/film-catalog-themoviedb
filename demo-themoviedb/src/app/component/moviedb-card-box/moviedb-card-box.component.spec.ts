import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedbCardBoxComponent } from './moviedb-card-box.component';

describe('MoviedbCardBoxComponent', () => {
  let component: MoviedbCardBoxComponent;
  let fixture: ComponentFixture<MoviedbCardBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedbCardBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedbCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
