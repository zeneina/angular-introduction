Βήμα 10: Angular Material
Εγκατάσταση του Angular Material και του Angular CDK:

❯ ng add @angular/material
ℹ Using package manager: npm
✔ Found compatible package version: @angular/material@17.3.2.
✔ Package information loaded.

The package @angular/material@17.3.2 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview:
https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? No
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1396 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.config.ts (338 bytes)
UPDATE angular.json (3652 bytes)
UPDATE src/index.html (516 bytes)
UPDATE src/styles.css (181 bytes)
Επέμβαση στο PersonTableComponent για να χειρίζεται δεδομένα είτε Person είτε EPerson.

Επέμβαση στο ComponentOutputExampleComponent και αντικατάσταση του alert με το dialog του Angular Material (https://t.ly/JLFka).

Βήμα 9: Component Output
Δημιουργία του ComponentOutputExampleComponent και ενημέρωση του μενού της εφαρμογής μας (στο app.routes.ts και στο list-group-menu.component.ts).
Ενημέρωση του SimpleDataTableComponent ώστε να περνάει σαν έξοδο τη γραμμή του πίνακα που επιλέγεται με διπλό κλικ.
Χρήση του decorator @Output() στο χαρακτηριστικό personClicked τύπου EPerson στο SimpleDataTableComponent.
Το output είναι ένα EventEmitter<T> που μεταφέρει δεδομένα του συγκεκριμένου τύπου <Τ>.
Βήμα 8: Simple Datatable
Χρήση του https://cobbl.io/ για να παράξουμε ένα πίνακα με πολλά δεδομένα τύπου ΕPerson που ορίζουμε στο /shared/interfaces/person.ts:

export interface EPerson {
  givenName: string;
  surName: string;
  age: string;
  email: string;
  address: string;
  education: string;
}

export const ManyPerson: EPerson[] = [
  {
    given_name: 'Sarah',
    surName: 'Howard',
    age: '41',
    email: 's.m.howard@yahoo.com',
    education: 'Some college, no degree',
  },
  ...
Δημιουργία του SimpleDataTableComponent: λαμβάνει δεδομένα τύπου EPerson και τα εμφανίζει σε έναν πίνακα με δυνατότητα ταξινόμησης ανά στήλη

Δημιουργία του SimpleDataTableExampleComponent: χρησιμοποιεί το SimpleDataTableComponent

Ενημέρωση του μενού της εφαρμογής μας

app.routes.ts:

...
{
  path: 'simple-data-table-example',
  component: SimpleDatatableExampleComponent,
}
...
list-group-menu.component.ts:

...
{
  text: 'Simple Data Table Example',
  routerLink: 'simple-data-table-example',
}
...
Εγκατάταση του lodash-es:

npm i lodash-es
npm i --save-dev @types/lodash-es
Βήμα 7: Fancy App Menu με το list-group του Bootstrap
Δημιουργία νέου interface MenuItem στο αρχείο shared/interfaces/menu-item.ts:

export interface MenuItem {
  text: string; // Κείμενο που εμφανίζεται στο μενού
  routerLink: string; // Το path που αντιστοιχεί στο component
}
Δημιουργία του component ListGroupMenuComponent με την εντολή:

ng g c components/list-group-menu
To μενού της εφαρμογής μας είναι ένας πίνακας αντικειμένων MenuEntry:

menu: MenuEntry[] = [
  { text: 'Component Input Example', routerLink: 'component-input-example' },
  { text: '@for Directive Example', routerLink: 'for-directive-example' },
  { text: 'Event Bind Example', routerLink: 'event-bind-example' },
];
Βήμα 6: Routing
Σκοπός μας είναι να κάνουμε επιλογές από το μενού στα αριστερά και τα component να εμφανίζονται στο χώρο δεξιά.

Δημιουργία του Welcome component, αυτό που θα εμφανίζεται πρώτο όταν ξεκινήσει η εφαρμογή (χρησιμοποιεί κι ένα λογότυπο από το /assets):

ng g c welcome
Στο αρχείο app.routes.ts ο πίνακας routes περιέχει αντικείμενα που είναι ο κατάλογος των path που εμφανίζονται στο μενού της εφαρμογής μαζί με το Angular component που αντιστοιχεί στο path.

import { Routes } from "@angular/router";
import { EventBindExampleComponent } from "src/app/components/event-bind-example/event-bind-example.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

export const routes: Routes = [
  { path: "event-bind-example", component: EventBindExampleComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
];
Ήδη στο αρχείο app.config.ts ο κατάλογος των routes περνάει στο provideRouter:

import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
Το ακριβές σημείο στο template που θα εισάγονται τα component δηλώνεται με τη χρήση του tag <router-outlet>:

...
<span class="flex-grow-1 p-2 text-nowrap">
  <router-outlet></router-outlet>
</span>
...
Παράδειγμα ροής για μια επιλογή του χρήστη:

Ο χρήστης επιλέγει κάτι από το μενού που στην HTML το tag που αφορά την επιλογή συμπεριλαμβάνει την οδηγία routerLink, π.χ. στο app.component.html το tag <span role="button" routerLink="event-bind-example">Event Bind Example</span>.
Ο έλεγχος μεταβιβάζεται στο αρχείο app.routes.ts όπου γίνεται αναζήτηση στον πίνακα routes για την εύρεση του αντικειμένου που έχει τιμή στο χαρακτηριστικό path ίδια με την τιμή του routerLink στο tag από το βήμα 1.
To URL αλλάζει σε αυτό που αντιστοιχεί στο path του αντικειμένου του βήματος 2.
Στο πλαίσιο του <router-outlet></router-outlet> εμφανίζεται το component από το χαρακτηριστικό του αντικειμένου του βήματος 2.
Δημιουργία των ComponentInputExampleComponent και ForDirectiveExampleComponent και προσθήκη στο μενού της εφαρμογής:

Ενημέρωση του αρχείου app.routes.ts
Ενημέρωση του html μενού με τις κατάλληλες οδηγίες routerLink
Βήμα 5: Event binding
Δέσμευση μεθόδου της κλάσης (event handler) στο συμβάν event του template με χρήση του (eventName)="onEventName($event)"

<button (click)="onAddPerson()">Add Person</button>
Χρήση του event input από ένα HTML input element για ανάγνωση της τιμής του στην κλάση και στη συνέχεια πέρασμα πίσω στο template με χρήση της απλής δέσμευση με το {{ <atribute_name > }}

<input type="text" (input)="onInput($event)" />
Βήμα 4: @for Template Directive
Ορισμός χαρακτηριστικού persons τύπου Person[] στην κλάση AppComponent (πίνακας αντικειμένων τύπου Person)

Χρήση του template directive @for(obj of objects); track obj για την εμφάνιση των δεδομένων του πίνακα persons με τη χρήση του component PersonTableComponent

@for (user of users; track user) {
<app-person-table [person]="user"></app-person-table>
}
Βήμα 3: Component Input
Δημιουργία interface για τα δεδομένα τύπου Person

ng generate interface shared/interfaces/person
export interface Person {
  givenName: string;
  surName: string;
  age: number;
  email: string;
  address: string;
}
Χρήση του interface Person ως τύπο του χαρακτηριστικού person στο component PersonTableComponent

Χρήση του decorator @Input() στο χαρακτηριστικό person τύπου Person ή undefined στο component PersonTableComponent

Χρήση του @if() {} @else {} στο template του component PersonTableComponent για την υπό συνθήκη εμφάνιση των δεδομένων του χαρακτηριστικού person

Η δέσμευση των χαρακτηριστικών της κλάσης AppComponent στο χαρακτηριστικό person του component PersonTableComponent γίνεται στο template του component AppComponent

<app-person-table [person]="person0"></app-person-table>
<!-- Χωρίς δέσμευση στο επόμενο -->
<app-person-table></app-person-table>
<app-person-table [person]="person1"></app-person-table>
Βήμα 2: Δημιουργία νέου component
Δημιουργία ενός νέου component με την εντολή ng generate component components/person-table.
Μεταφορά του πίνακα από το app.component.html στο template του νέου component.
Μεταφορά του χαρακτηριστικού person από την κλάση AppComponent στην κλάση PersonTableComponent.
Συμπερίληψη της κλάσης PersonTableComponent στον πίνακα imports στην αρχικοποίηση του decorator στο αρχείο app.component.ts.
Χρήση του νέου component στο template του app.component.html με την ετικέτα <app-person-table></app-person-table>.
Βήμα 1: Απλή δέσμευση χαρακτηριστικών (one way binding)
Χρήση του placeholder {{ <atribute_name > }} για τη δεσμευση του χαρακτηριστικού attribute_name στο template του component.
Αν το χαρακτηριστικό της κλάσης είναι αντικείμενο τότε χρησιμοποιούμε τη γνωστή σύνταξη {{ <object_name>.<attribute_name> }}.
Βήμα 0: Προετοιμασία και βασικές ενέργειες
Εγκατάσταση του Angular CLI

npm install -g @angular/cli@latest
Δημιουργία ενός νέου Angular Project

ng new angular-introduction --standalone --skip-tests
Επεμβάσεις στο αρχείο ts.config.json

{
...
"compilerOptions": {
    ...
    "baseUrl": "./",
    "strict": false,
    ...
}
...
}
Εκκίνηση του Angular Project

❯ ng serve
Initial chunk files | Names         | Raw size
polyfills.js        | polyfills     | 83.60 kB |
main.js             | main          |  1.67 kB |
styles.css          | styles        | 95 bytes |

                    | Initial total | 85.36 kB

Application bundle generation complete. [1.241 seconds]

Watch mode enabled. Watching for file changes...
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
Η εφαρμογή είναι διαθέσιμη στη διεύθυνση http://localhost:4200/

Δημιουργία online repository στο GitHub (angular-introduction) και αποστολή του κώδικα

git remote add origin git@github.com:christodoulos/angular-introduction.git
git push -u origin main
Δημιουργία του repository <username>.github.io αν δεν υπάρχει ήδη.

Προσθήκη δυνατότητας deployment στις σελίδες gh-pages του GitHub

ng add angular-cli-ghpages
Προσθήκη του deploy script στο αρχείο package.json

{
...
"scripts": {
    ...
    "deploy": "ng deploy --base-href=https://<username>.github.io/angular-introduction/"
}
...
}
Αποστολή της εφαρμογής στις σελίδες gh-pages του GitHub

npm run deploy
Η εφαρμογή είναι διαθέσιμη στη διεύθυνση https://<username>.github.io/angular-introduction/

Ενεργοποίηση του GitHub Pages για το repository <username>.github.io/angular-introduction

Η εφαρμογή είναι διαθέσιμη στη διεύθυνση https://<username>.github.io/angular-introduction/

Εγκατάσταση του bootstrap

npm install bootstrap
Επεξεργασία του αρχείου angular.json

{
...
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
...
}
Επανεκκίνηση του Angular Project μετά από κάθε αλλαγή στο αρχείο angular.json είναι απαραίτητο να εκκινηθεί ξανά το Angular Project (^C και ξανά ng serve)

Τοπική εγκατάσταση του prettier και δημιουργία του αρχείου .prettierrc

npm install --save-dev prettier
{
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}