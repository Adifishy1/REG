import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CalendarComponent } from "../calendar/calendar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CalendarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
