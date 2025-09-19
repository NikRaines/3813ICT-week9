import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Add } from './components/add/add';
import { Update } from './components/update/update';

export const routes: Routes = [
  {
    path: 'products',
    component: Products,
    title: 'Products',
  },
  {
    path: 'add',
    component: Add,
    title: 'Add',
  },
  {
    path: 'update',
    component: Update,
    title: 'Update',
  }
];