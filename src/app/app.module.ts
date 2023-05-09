import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './components/cart/cart.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
