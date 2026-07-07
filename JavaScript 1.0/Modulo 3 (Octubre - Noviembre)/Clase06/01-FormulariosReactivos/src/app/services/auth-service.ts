import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private readonly VALID_EMAIL = 'user@example.com';
  private readonly VALID_PASSWORD = 'password123';

  private IsAuthenticated = false;

  constructor() {}
  
  login(email: string, password: string): boolean {
    if (email === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      this.IsAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

}
