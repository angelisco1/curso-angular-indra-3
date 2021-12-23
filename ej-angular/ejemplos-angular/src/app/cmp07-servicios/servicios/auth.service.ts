import { Injectable } from '@angular/core';
import { EventosService } from './eventos.service';
import jwtDecode from 'jwt-decode';

interface JWTData {
  id: number,
  rol: string,
  nombre: string,
  iat: number,
  lang: string,
  theme: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keyToken: string = 'jwt'

  constructor(private eventos: EventosService) { }

  getUserIdFromToken(): number {
    const token = this.getToken()
    if (token) {
      const payload: JWTData = jwtDecode(token)
      console.log({payload})
      return payload.id
    }
    return -1
  }

  getUserNameFromToken(): string {
    const token = this.getToken()
    if (token) {
      const payload: JWTData = jwtDecode(token)
      console.log({payload})
      return payload.nombre
    }
    return ''
  }

  getToken(): string | null {
    return localStorage.getItem(this.keyToken)
  }

  setToken(token: string): void {
    localStorage.setItem(this.keyToken, token)
    this.eventos.authEvent$.emit(true)
  }

  delToken(): void {
    localStorage.removeItem(this.keyToken)
    this.eventos.authEvent$.emit(false)
  }

  hasToken(): boolean {
    return this.getToken() !== null
    // return !!this.getToken()
  }
}