import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppEnvironment} from "../shared/app-environment.interface";
import {publishReplay, refCount} from "rxjs/operators";

interface JwtResponse {
  accessToken: string;
}

@Injectable()
export class AuthenticationApiService {

  constructor(
    private readonly http: HttpClient,
    private readonly appEnv: AppEnvironment
  ) {
  }

  login(email: string, password: string, role: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      [
        this.appEnv.apiUrl,
        'auth',
        'login'
      ].join('/'),
      {
        email,
        password,
        role
      },
      {
        headers: {
          'Authorization': 'Bearer token',

        }
      }
    ).pipe(
      publishReplay(1),
      refCount()
    )
  }
}
