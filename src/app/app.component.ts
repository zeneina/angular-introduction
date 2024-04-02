import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Ina';

  person  ={
  givenName: 'Ina',
  surName: 'Zenelaj',
  age: 0x20,
  email:'ina@aueb.gr'
  };
}