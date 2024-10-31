import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/Produit';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  produits : Observable<Produit[]> | undefined;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getProduits().subscribe();
    this.produits = this.apiService.produits$;
  }
}




