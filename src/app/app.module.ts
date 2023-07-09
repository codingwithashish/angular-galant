import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { MultiSelectDropdownComponent } from './shared/multi-select-dropdown/multi-select-dropdown.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutModule } from './checkout/checkout.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MultiSelectDropdownComponent,
    CheckoutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CartModule,
    CheckoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
