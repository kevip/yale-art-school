import { TestBed } from '@angular/core/testing';

import { AuthHttp } from './auth.http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('@AuthHttp', () => {
  let service: AuthHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,]
    });
    service = TestBed.inject(AuthHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
