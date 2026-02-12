export interface AuthUser {
  name: string;
  id: string;
}

export interface AuthResponse {
  token: string;
  payload: AuthUser;
}

export interface LoginCredentials {
  name: string;
  password: string;
}
