import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product$: Observable<IProduct | undefined> = this.activatedRoute.params.pipe(
    map((params) => {
      if (params) {
        return this.productService.getProductById(Number(params['id']));
      }
      return undefined;
    })
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
}
