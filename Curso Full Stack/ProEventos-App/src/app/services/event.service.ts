import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class EventService {
  baseUrl = 'https://localhost:5001/Events';
  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl)
  }

  public getEventsByTheme(theme: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/${theme}/theme`)
  }

  public getEventById(id: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/${id}`)
  }

}
