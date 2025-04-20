import { Usuario } from "./user.interface";

export interface AuthResponse {
  success: boolean;
  token:   string;
  user:    Usuario;
}
