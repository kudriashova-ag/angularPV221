import { Routes } from '@angular/router';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { FirstComponent } from './components/first/first.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'first', component: FirstComponent },
  { path: 'products', component: ProductsComponent },
];
