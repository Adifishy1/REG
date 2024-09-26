import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'; // Add CommonModule for *ngFor and *ngIf directives
@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss'
})
export class UpcomingEventsComponent {
 workEvents=[
    {
      id:1,
      name:'Ashwin N.',
      img:"../../assets/imgs/head.jpg",
      date:'10 Aug 2024',
      role:"UI/UX Designer"
    },    {
      id:2,
      name:'Nilesh J.',
      img:"../../assets/imgs/head.jpg",
      date:'30 Sep 2024',
      role:"UI/UX Designer"
    }
  ]

}
