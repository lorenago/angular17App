import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './features/cart/cart.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductDetailsComponent } from './features/products/details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', title: 'Home', component: HomeComponent },
    { path: 'home/detail/:id', component: DetailComponent },
    { path: 'home/cart', component: CartComponent },
    { path: 'home/products', component: ProductsComponent },
    // { path: 'home/product-details/:id:color', component: ProductDetailsComponent },
    { path: 'home/product-details', component: ProductDetailsComponent, pathMatch: 'prefix' },
    { path: 'home/products', component: ProductsComponent, children: [
        { path: 'details/:id', component: ProductDetailsComponent }
    ]},
    { path: 'detail/:id', component: DetailComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
