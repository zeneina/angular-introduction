import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { EPerson, Person } from 'src/app/shared/interfaces/person';
=======
import { Person } from 'src/app/shared/interfaces/person';
>>>>>>> f87d793613e515dad3d082dfeaec621a001d361f

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css',
})
export class PersonTableComponent {
<<<<<<< HEAD
  @Input() person: Person | EPerson | undefined;

  isPerson() {
    return this.person && 'address' in this.person;
  }

  isEPerson() {
    return this.person && 'education' in this.person;
  }
=======
  @Input() person: Person | undefined;
>>>>>>> f87d793613e515dad3d082dfeaec621a001d361f
}