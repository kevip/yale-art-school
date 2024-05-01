import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginRequest } from '../interface/login.request.interface';
import { ILoginResponse } from '../interface/login.response.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthHttp {
  private readonly http = inject(HttpClient);

  login(request: ILoginRequest): Observable<ILoginResponse> {
    const endpoint = `${environment.API_URL}/login`;

    return this.http.post<ILoginResponse>(endpoint, request);
  }
}
