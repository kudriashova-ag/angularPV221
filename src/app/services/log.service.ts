import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  write(message: String): void {
    console.log(message);
  }
}
