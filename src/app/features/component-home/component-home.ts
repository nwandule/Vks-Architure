import { Component } from '@angular/core';
import { ComponentGetInTouchModal } from '../../shared/component-get-in-touch-modal/component-get-in-touch-modal';
import { CommonModule } from '@angular/common';
import { ComponentGetInTouchBanner } from '../../shared/component-get-in-touch-banner/component-get-in-touch-banner';

@Component({
  selector: 'app-component-home',
  standalone: true,
  imports: [CommonModule,ComponentGetInTouchModal,ComponentGetInTouchBanner],
  templateUrl: './component-home.html',
  styleUrl: './component-home.scss',
})
export class ComponentHome {
 
}
