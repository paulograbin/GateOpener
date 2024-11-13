import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {TestName} from "../models/name";

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http: HttpClient) {
  }

  callHome(): Observable<TestName> {
    console.log("Calling home...")

    return this.http.get<TestName>('http://192.168.1.101:8080/getName')
      .pipe(
        map(
          data => {
            // console.log("pipeing todo", data);

            return data;
          }
        )
      );
  }
}
