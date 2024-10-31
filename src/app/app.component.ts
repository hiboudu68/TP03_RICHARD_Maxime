import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP03_RICHARD_Maxime';
}
