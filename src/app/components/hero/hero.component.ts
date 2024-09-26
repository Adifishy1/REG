import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add CommonModule for *ngFor and *ngIf directives

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
