import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WorkshopsService {
  private readonly ApiBaseUrl = "https://workshops-server.herokuapp.com";

  constructor(private http: HttpClient) {}

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) console.error(err.error.message);
    else {
      console.error(
        `Backend returned cod ${err.status} ` + `body was : ${err.error}`
      );
    }
    return throwError("something bad has happend");
  }

  getWorkshops() {
    return this.http.get(`${this.ApiBaseUrl}/workshops`).pipe(
      tap(item => {
        console.log(item);
      }),
      catchError(this.handleError)
    );
  }
  getWorkshopsbyId(id) {
    return this.http.get(`${this.ApiBaseUrl}/workshops/${id}`);
  }
  getSessionByWorkshopId(id) {
    return this.http.get(`${this.ApiBaseUrl}/workshops/${id}/sessions`);
  }

  addSession(session) {
    const sessionCopy = { ...session };
    console.log(session);
    return this.http.post(`${this.ApiBaseUrl}/sessions`, sessionCopy, {
      headers: new HttpHeaders({ "content-type": "apllication/json" })
    });
  }
}
