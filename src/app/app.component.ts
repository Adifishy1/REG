import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from './components/contact/contact.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { MissionStatementComponent } from './components/mission-statement/mission-statement.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CalendarComponent } from './components/calendar/calendar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ContactComponent, LeftPanelComponent, MissionStatementComponent, NewsEventsComponent, UpcomingEventsComponent, HeroComponent, NavbarComponent,CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assignment';

}
