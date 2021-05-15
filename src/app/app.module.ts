import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProductComponent } from './components/product/product.component';
import { FilterComponent } from './components/filter/filter.component';
import { SortComponent } from './components/sort/sort.component';
import { MinicartComponent } from './components/minicart/minicart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    DetailsComponent,
    ProductComponent,
    FilterComponent,
    SortComponent,
    MinicartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
