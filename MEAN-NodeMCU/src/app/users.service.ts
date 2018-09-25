import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  name;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(_name) {
    this.isUserLoggedIn = true;
    this.name = _name;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
