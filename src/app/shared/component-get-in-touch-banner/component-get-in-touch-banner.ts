/**
 * @author @vikash
 * @component ComponentGetInTouchBanner
 * @description 
 * 
 * 
  **/
import { Component } from '@angular/core';
import { ComponentGetInTouchModal } from '../component-get-in-touch-modal/component-get-in-touch-modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-get-in-touch-banner',
    standalone: true,
  imports: [CommonModule,ComponentGetInTouchModal],
  templateUrl: './component-get-in-touch-banner.html',
  styleUrl: './component-get-in-touch-banner.scss',
})
export class ComponentGetInTouchBanner {

}
