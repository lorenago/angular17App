import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less'
})
export class ProductDetailsComponent {
  @Input('id') productId!: string;
  @Input('color') productColor!: string;
  // public productId: string | null = '';
  // private route = inject(ActivatedRoute);

  // ngOnInit() {
  //  this.productId = this.route.snapshot.paramMap.get('id');
  //  this.productId = this.route.snapshot.params?.['id'];
  //  this.route.params.subscribe((params: Params) => {  
  //     this.productId = params?.['id'];
  //   });
  // }
}
