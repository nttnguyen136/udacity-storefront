import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, HttpClientModule, FormsModule],
  exports: [ProductListComponent, ProductCardComponent, ProductDetailComponent],
})
export class ProductModule {}
