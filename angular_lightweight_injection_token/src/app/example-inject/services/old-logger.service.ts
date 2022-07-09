import { Injectable } from '@angular/core';
import { LOGGER } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class OldLoggerService implements LOGGER {
  constructor() {}

  logNormal(): void {
    console.log('OldLoggerService: This is a log');
  }

  logWarning(): void {
    console.warn('OldLoggerService: This is a warning');
  }
}
