import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentGetInTouchBanner } from '../../shared/component-get-in-touch-banner/component-get-in-touch-banner';

@Component({
  selector: 'app-component-about',
  imports: [CommonModule,ComponentGetInTouchBanner],
  templateUrl: './component-about.html',
  styleUrl: './component-about.scss',
})
export class ComponentAbout {

}
