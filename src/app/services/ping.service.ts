import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TestName} from "../models/name";

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(private http: HttpClient) {
  }

  callHome(): Observable<TestName> {
    console.log("Checking if backend is available...")

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
