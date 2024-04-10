import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class ProductDetailsComponent {
  @Input({ alias: 'id' }) productId!: string;

  private readonly apiSvc = inject(ApiService);

  product$ = this.apiSvc.getProduct(this.productId);
}
