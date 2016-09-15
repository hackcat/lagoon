import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LoginService {
  token: string;

  constructor (private http:Http) {}

  sendCredentials(model) {
    let tokenUrl = 'http://localhost:8080/user/login';
    let headers1 = new Headers({'Content-Type': 'application/json'});

    return this.http.post(tokenUrl, JSON.stringify(model), {headers: headers1});
  }

  sendToken(token) {
    let userUrl = 'http://localhost:8080/rest/user/users';
    let headers2 = new Headers({'Authorization':'Bearer ' + token});

    return this.http.get(userUrl, {headers: headers2});
  }

}
