import { Routes } from '@angular/router';
import { IpoTrackerComponent } from './components/ipo-tracker/ipo-tracker.component';
import { HomeComponent } from './components/home/home.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { StockScreenerComponent } from './components/stock-screener/stock-screener.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { LoginComponent } from './core/login/login.component';

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
      path: 'stocks/:name',
      component: StockDetailComponent,
    },
    {
      path: 'ipo/:name',
      component: IpoComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    }
  ];

