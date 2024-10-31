import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private apiService: ApiService) { }

  updateProduits(input: string) {
    this.apiService.getProduits(input, input, +input).subscribe();
  }
}
