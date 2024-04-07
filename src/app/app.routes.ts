import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/evente-bind-example/evente-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: 'event-bind-example', component: EventBindExampleComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];