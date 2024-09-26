import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { NewsEventsComponent } from "./news-events/news-events.component";
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ContactComponent, LeftPanelComponent, MissionStatementComponent, NewsEventsComponent,UpcomingEventsComponent,HeroComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assignment';

}
