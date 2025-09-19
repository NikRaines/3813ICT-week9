import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.html',
  styleUrls: ['./add.css']
})
export class Add {
  product: Product = { id: 0, name: '', description: '', price: 0, units: 0 };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product).subscribe({
      next: (response) => {
        alert('Product added successfully');
        this.product = { id: 0, name: '', description: '', price: 0, units: 0 };
      },
      error: (error) => {
        console.error('Error adding product:', error);
        alert('Error adding product: ' + error.message);
      }
    });
  }
}
