import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {TestName} from "../models/name";


@Injectable({
  providedIn: 'root'
})
export class ExperimentalService {

  constructor(private http: HttpClient) {
  }

  fetchTodo() {
    const url = "https://jsonplaceholder.typicode.com/todos/1"

    const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(url);

    return this.http.get(proxyUrl)
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
