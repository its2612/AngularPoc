import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap,map,catchError } from 'rxjs/operators';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseURL: string = "http://localhost:3000/contacts";
 
  constructor(private http: HttpClient) {
  }
 
  // getPeople(): Observable<Person[]> {
  //   console.log('getPeople '+this.baseURL + 'people')
  //   return this.http.get<Person[]>(this.baseURL + 'people')
  // }
 
  addContact(contact:Contact): Observable<any> {
    debugger;
    const headers = { 'content-type': 'application/json'} 
    
    const body=JSON.stringify(contact);
    console.log(body);
    
    return this.http.post(this.baseURL , body,{'headers':headers})
  }
}
