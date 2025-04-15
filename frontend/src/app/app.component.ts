import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IpoTrackerComponent } from './components/ipo-tracker/ipo-tracker.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,HeaderComponent,FooterComponent,HomeComponent,IpoTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
