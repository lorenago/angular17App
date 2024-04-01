import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];