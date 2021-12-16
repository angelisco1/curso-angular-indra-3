import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  error(msg: string): void {
    console.error(`[ERROR] ${new Date().toLocaleDateString()} ${msg}`)
  }

  warn(msg: string): void {
    console.warn(`[WARN] ${new Date().toLocaleDateString()} ${msg}`)
  }
}
