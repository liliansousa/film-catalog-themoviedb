import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ThemoviedbService } from './themoviedb.service';

describe('ThemoviedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ThemoviedbService]
  }));

  it('should be created with httpClient to use API data', () => {
    const service: ThemoviedbService = TestBed.get(ThemoviedbService);
    expect(service).toBeTruthy();
  });

});
