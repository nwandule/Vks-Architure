/**
 * @author @vikash
 * @service ContactService
 * @description Handles contact form submissions and simulates API calls.
 *
 * @example
 * // In a component:
 * constructor(private contactService: ContactService) {}
 *
 * const data: ContactFormData = { name: 'John', cellNumber: '0123456789', message: 'Hello' };
 * this.contactService.submitContact(data).subscribe(result => console.log(result));
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface ContactFormData {
  name: string;
  cellNumber: string;
  message: string;
}
@Injectable({
  providedIn: 'root',
})
export class ContactService {
   constructor() {}

  submitContact(data: ContactFormData): Observable<{ success: boolean }> {
    console.log('Simulated API call:', data);
    // Mimic API call with delay
    return of({ success: true });
  }
}
