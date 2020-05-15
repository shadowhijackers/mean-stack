import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Student} from './models/student';
import {StudentAPIResponse} from './models/studentAPIResponse';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

   apiUrl = 'http://localhost:3000';
   httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
   };

  constructor(private http: HttpClient) { }

  getStudents(searchStr = null): Observable<StudentAPIResponse> {

    let url = `${this.apiUrl}/students`;
    if (searchStr) {
      url = `${url}?q=${searchStr}`;
    }
    return this.http.get<StudentAPIResponse>(url);
  }

  getStudentById(id: string): Observable<StudentAPIResponse> {
    const url = `${this.apiUrl}/students/${id}`;
    return this.http.get<StudentAPIResponse>(url);
  }

  addStudent(student: Student): Observable<StudentAPIResponse> {
    const url = `${this.apiUrl}/students`;
    return this.http.post<StudentAPIResponse>(url, student, this.httpOptions);
  }

  updateStudent(id: string, student: Student): Observable<StudentAPIResponse> {
    const url = `${this.apiUrl}/students/${id}`;
    return this.http.put<StudentAPIResponse>(url, student, this.httpOptions);
  }

  deleteStudent(id: string): Observable<StudentAPIResponse> {
    const url = `${this.apiUrl}/students/${id}`;
    return this.http.delete<StudentAPIResponse>(url, this.httpOptions);
  }

}
