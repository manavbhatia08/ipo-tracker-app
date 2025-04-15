import { Routes } from '@angular/router';
import { IpoTrackerComponent } from './components/ipo-tracker/ipo-tracker.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'ipos',
      component: IpoTrackerComponent,
    }
  ];

