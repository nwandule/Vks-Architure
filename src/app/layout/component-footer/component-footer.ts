/**
 * @author  @vikash
 * @component FooterComponent
 * @description Provides structural site information and dynamic copyright data.
 */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-footer.html',
  styleUrl: './component-footer.scss',
})
export class ComponentFooter {
  footer = {
  brand: 'Visionary Studio',
  tagline: 'Crafting modern architectural experiences.',
  email: 'hello@studio.com',
  phone: '+27 81 773 1363'
};
  currentYear = new Date().getFullYear();

}
