import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './features/cart/cart.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductDetailsComponent } from './features/products/details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)
    }, {
        path: 'home/detail/:id',
        loadComponent: () => import('./components/detail/detail.component').then(c => c.DetailComponent)
    }, {
        path: 'home/cart',
        loadComponent: () => import('./features/cart/cart.component').then(c => c.CartComponent)
    }, {
        path: 'home/products',
        loadComponent: () => import('./features/products/products.component').then(c => c.ProductsComponent)
    }, {
        path: 'home/product-details/:id',
        loadComponent: () => import('./features/products/details/details.component').then(c => c.ProductDetailsComponent)
    }, {
        path: 'home/products',
        loadComponent: () => import('./features/products/products.component').then(c => c.ProductsComponent),
        children: [
            {
                path: 'details/:id',
                loadComponent: () => import('./features/products/details/details.component').then(c => c.ProductDetailsComponent)
            }
        ]
    }, {
        path: 'detail/:id',
        loadComponent: () => import('./components/detail/detail.component').then(c => c.DetailComponent)
    }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: '**',
        loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
    }
];
