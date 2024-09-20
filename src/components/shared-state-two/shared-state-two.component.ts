import { Component, OnInit } from '@angular/core';
import { SignalsStoreService } from '../../service/signals-store.service';

@Component({
  selector: 'app-shared-state-two',
  standalone: true,
  // providers: [SignalsStoreService], If you want an unique state manager for this component you could declarate a new instance of the service
  templateUrl: './shared-state-two.component.html',
  styleUrls: ['./shared-state-two.component.css'],
})
export class SharedStateTwoComponent implements OnInit {
  user$ = this.store.state;

  constructor(private store: SignalsStoreService) {}

  ngOnInit() {
    setTimeout(() => {
      this.store.setState({
        name: 'User name after 5 seconds changed in Component2',
        email: 'User email after 5 seconds changed in Component2',
        username: 'User username after 5 seconds changed in Component2',
      });
    }, 5000);
  }
}
