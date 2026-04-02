/**
 * @author @vikash
 * @component ComponentGetInTouchModal
 * @description 
 * A standalone Angular component providing a modal for users to submit their contact information.
 * 
 * Features:
 * - Reactive modal visibility using Angular signals.
 * - Collects user's name, 10-digit cell number, and message.
 * - Validates that all fields are filled before submission.
 * - Simulates sending the data via ContactService.
  **/
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-component-get-in-touch-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component-get-in-touch-modal.html',
  styleUrls: ['./component-get-in-touch-modal.scss'],
  exportAs: 'getInTouchModal',
})
export class ComponentGetInTouchModal {
  isOpen = signal(false);

  name = '';
  cellNumber = '';
  message = '';
constructor(private contactService: ContactService) {}
  open() { this.isOpen.set(true); }
  close() { this.isOpen.set(false); }

  submit(form: NgForm) {
  if (form.valid) {
    this.contactService.submitContact({
      name: this.name,
      cellNumber: this.cellNumber,
      message: this.message
    }).subscribe({
      next: () => {
        alert('Thank you! We will contact you soon.');
        this.close();
        form.resetForm();
      },
      error: () => alert('Something went wrong, try again!')
    });
  } else {
    form.control.markAllAsTouched();
  }
}
}