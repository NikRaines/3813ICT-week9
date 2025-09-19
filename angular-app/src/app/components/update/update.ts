import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update.html',
  styleUrls: ['./update.css']
})
export class Update {
  product: Product = { id: 0, name: '', description: '', price: 0, units: 0 };

  constructor(private productService: ProductService) {}

  updateProduct() {
    if (this.product.id <= 0) {
      alert('Enter a valid Product ID to update');
      return;
    }

    this.productService.updateProduct(this.product.id, this.product).subscribe({
      next: (response) => {
        alert('Product updated successfully!');
        this.product = { id: 0, name: '', description: '', price: 0, units: 0 };
      },
      error: (error) => {
        console.error('Error updating product:', error);
        alert('Error updating product: ' + error.message);
      }
    });
  }
}
