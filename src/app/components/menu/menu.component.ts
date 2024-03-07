import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  products: any;
  burgers: any[] = [];
  sides: any[] = [];
  drinks: any[] = [];
  activeCategory: string = 'burgers';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('./assets/api/products.json').subscribe((data) => {
      this.products = data;
      this.burgers = data.burgers;
      this.sides = data.sides;
      this.drinks = data.drinks;
    });
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }
}
