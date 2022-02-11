import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhoneNumber } from '../models/PhoneNumber';

@Injectable({
    providedIn: 'root'
})
export class PhoneNumberService {
    constructor(private http: HttpClient) { }

    getPhoneNumbers(): Observable<PhoneNumber[]> {
        return this.http.get<PhoneNumber[]>(environment.baseUrl + '/phone-numbers');
    }
}