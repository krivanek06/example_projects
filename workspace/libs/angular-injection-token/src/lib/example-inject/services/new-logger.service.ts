import { Injectable } from '@angular/core';
import { LOGGER } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class NewLoggerService implements LOGGER {
  constructor() {}
  logNormal(): void {
    console.log('%c NewLoggerService: This is a log', 'color: #5c75ff');
  }

  logWarning(): void {
    console.log('%c NewLoggerService: This is a warning', 'color: #e79a08');
  }
}
