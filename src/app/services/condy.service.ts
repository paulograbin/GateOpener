import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Acionamento} from "../models/acionamento";

@Injectable({
  providedIn: 'root'
})
export class CondyService {

  token = "";

  constructor(private http: HttpClient) {
  }

  fetchAcionamentos(): Observable<Acionamento[]> {
    console.log("Calling home...")

    return this.http.get<Acionamento[]>('http://192.168.1.101:8080/acionamento')
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }

  triggerAcionamento(id: number): Observable<string> {
    console.log(`Triggering one ${id}`)

    return this.http.post<string>(`http://192.168.1.101:8080/triggerAcionamento/${id}`, null);
  }
}
