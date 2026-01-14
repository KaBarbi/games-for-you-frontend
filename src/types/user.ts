export interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  phone: string;
  created_at: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  username: string;
  email: string;
}
