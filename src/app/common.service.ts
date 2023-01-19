import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  bookTableRemote(data:any)
  {
    return this._http.post<any>("http://localhost:8085/SaveBooking",data);
  }
  sendConfirmationSMS(sms:any)
  {
    return this._http.post<any>("http://localhost:8085/sms",sms);
  }
}
