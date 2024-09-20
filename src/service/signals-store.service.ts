import { computed, Injectable, Signal, signal } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class SignalsStoreService {
  readonly state = signal({
    name: 'initial State from service',
    username: 'initial State from service',
    email: 'initial State from service',
  } as User);

  constructor() {}

  public set<K extends keyof User>(key: K, data: User[K]) {
    this.state.update((currentValue) => ({
      ...currentValue,
      [key]: data,
    }));
  }

  public setState(partialState: Partial<User>): void {
    this.state.update((currentValue) => ({
      ...currentValue,
      ...partialState,
    }));
  }

  public select<K extends keyof User>(key: K): Signal<User[K]> {
    return computed(() => this.state()[key]);
  }
}
