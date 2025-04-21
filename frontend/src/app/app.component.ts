import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IpoTrackerComponent } from './components/ipo-tracker/ipo-tracker.component';
import { StockScreenerComponent } from './components/stock-screener/stock-screener.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HeaderComponent,FooterComponent,HomeComponent,IpoTrackerComponent,StockScreenerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
