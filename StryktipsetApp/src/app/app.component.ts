import { Component } from '@angular/core';
import { WelcomePageComponent } from './welcome-page/'
import { TopMenuComponent } from './top-menu/'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [WelcomePageComponent, TopMenuComponent]
})
export class AppComponent {
  title="Welcome!";
}
