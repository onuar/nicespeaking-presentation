import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Item } from '../models/Item';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {

  private apiUrl = 'https://nicespeaking-api.herokuapp.com/api';
  //private apiUrl = 'http://127.0.0.1:5000/api';

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Item[]> {
    const apiGet: string = "/list";
    return this.http.get(this.apiUrl + apiGet)
      .map(res => {
        let body = res.json();
        return body.data as Item[] || {};
      })
      .catch(this.handleError);
  }

  save(item: Item): Observable<Item> {
    const apiAdd: string = '/add';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.apiUrl + apiAdd, { "data": item }, options)
      .map(res => {
        let body = res.json();
        return body.data as Item || {};
      })
      .catch(this.handleError);

    //with promise
    //     .toPromise()
    // .then(response => {
    //   let json = response.json();
    //   return json;
    // })
    // .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}