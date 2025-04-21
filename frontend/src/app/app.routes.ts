import { Routes } from '@angular/router';
import { IpoTrackerComponent } from './components/ipo-tracker/ipo-tracker.component';
import { HomeComponent } from './components/home/home.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { StockScreenerComponent } from './components/stock-screener/stock-screener.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'ipos',
      component: IpoTrackerComponent,
    },
    {
      path: 'stocks',
      component: StockScreenerComponent,
    },
    {
      path: 'ipo/:name',
      component: IpoComponent,
    }
  ];

