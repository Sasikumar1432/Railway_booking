import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import { IStation, ResponseModel } from '../models/Station';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  apiEndPoint: string = '';
  // private corsProxy = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStations(): Observable<ResponseModel> {
    const headers = new HttpHeaders()
      .set('Access-Control-Request-Headers', 'content-type')
      .set('Access-Control-Request-Method', 'GET')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get<ResponseModel>(
      this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION,
      { headers }
    );
  }
}
