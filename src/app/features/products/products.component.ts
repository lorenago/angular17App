import { AsyncPipe } from '@angular/common';
import { Component, EnvironmentInjector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ AsyncPipe, CardComponent ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  apiSvc = inject(ApiService);
  products$ = this.apiSvc.getAllProducts();
  
  apiSvc2: any;
  private readonly fake_injector = inject(EnvironmentInjector);

  ngOnInit(): void {
    runInInjectionContext(this.fake_injector, () => {
      this.apiSvc2 = inject(ApiService);
      const result = toSignal(this.products$);
      console.log(result);
    });
  }
}
