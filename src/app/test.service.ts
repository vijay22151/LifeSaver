import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  CallService()
  {
    console.warn("Service called")
  }
}
