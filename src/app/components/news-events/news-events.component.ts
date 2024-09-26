import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add CommonModule for *ngFor and *ngIf directives
import { link } from 'fs';

@Component({
  selector: 'app-news-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-events.component.html',
  styleUrl: './news-events.component.scss'
})
export class NewsEventsComponent {

  newsEvents=[
    {
      id:1,
      date:'10 Aug 2024',
      newsData:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      link:"/#"
    }, {
      id:2,
      date:'18 Aug 2024',
      newsData:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      link:"/#"
    }
  ]
}
