import { Routes } from '@angular/router'
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Component } from '@angular/core';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example.component/for-directive-example.component';

export const routes: Routes = [
  { path: 'component-input-example', 
  component: ComponentInputExampleComponent},
  { 
    path: 'for-directive-example',
    component: ForDirectiveExampleComponent,
  },
  { path: 'event-bind-example', component: EventBindExampleComponent },
  //{ path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent},
];