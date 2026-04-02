
/**
 * @author  @vikash
 * @component HeaderComponent
 * @description Handles top-level navigation and brand identity logic.
 */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-component-header',
   standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './component-header.html',
  styleUrl: './component-header.scss',
})
export class ComponentHeader {
  navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' }
  ];
}
