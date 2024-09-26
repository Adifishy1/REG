import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'; // Add CommonModule for *ngFor and *ngIf directives

@Component({
  selector: 'app-hero-component',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './hero-component.component.html',
  styleUrl: './hero-component.component.scss'
})
export class HeroComponentComponent {

}
