import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, mergeMap, of } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product$: Observable<IProduct | undefined> = this.activatedRoute.params.pipe(
    mergeMap((params) => {
      if (params) {
        return this.productService.getProductById(Number(params['id']));
      }
      return of(undefined);
    })
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
}
