import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignalsStoreService } from '../../service/signals-store.service';

@Component({
  selector: 'app-shared-state-one',
  standalone: true,
  templateUrl: './shared-state-one.component.html',
  styleUrls: ['./shared-state-one.component.css'],
})
export class SharedStateOneComponent implements OnInit {
  name$ = this.store.select('name');
  email$ = this.store.select('email');
  username$ = this.store.select('username');

  constructor(private store: SignalsStoreService) {}

  ngOnInit() {
    setTimeout(() => {
      this.store.setState({
        name: 'User name after 2 seconds changed in Component1',
        email: 'User email after 2 seconds changed in Component1',
        username: 'User username after 2 seconds changed in Component1',
      });
    }, 2000);
  }
}
