import { Observable } from 'rxjs';
import { WritableSignal } from '@angular/core';
import { AuthUser, AuthResponse } from '@shared/interfaces/auth.interface';

export abstract class IAuthService {
  abstract currentUser: WritableSignal<AuthUser | null>;
  abstract isLoggedIn: WritableSignal<boolean>;
  
  abstract login(name: string, password: string): Observable<AuthResponse>;
  abstract register(name: string, password: string): Observable<any>;
  abstract logout(): void;
  abstract getToken(): string | null;
}
