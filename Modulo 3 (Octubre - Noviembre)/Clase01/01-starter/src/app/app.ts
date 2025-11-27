import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentIni } from './components/component-ini/component-ini';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentIni],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('01-starter');
}
