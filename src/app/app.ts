import { Component, signal } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { ComponentHeader } from "./layout/component-header/component-header";
import { ComponentFooter } from "./layout/component-footer/component-footer";


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, ComponentHeader, ComponentFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vks-architects');
}
