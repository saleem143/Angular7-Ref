import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Iemployee} from './employee';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {
 public employees= [];
 private _url ="/assets/data/employee1.json";
getEmployee():Observable<Iemployee[]>{
  return this.http.get<Iemployee[]>(this._url)
             .pipe(catchError(this.errorHandler));
  //here we make a call to get data from db
     
}
errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "server error");
}
  constructor(private http: HttpClient) { }
}
