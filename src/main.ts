import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SharedStateOneComponent } from './components/shared-state-one/shared-state-one.component';
import { SharedStateTwoComponent } from './components/shared-state-two/shared-state-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedStateOneComponent, SharedStateTwoComponent],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
