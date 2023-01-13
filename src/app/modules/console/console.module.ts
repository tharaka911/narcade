import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConsoleRoutingModule} from './console-routing.module';
import {ConsoleComponent} from './console.component';
import {DashboardContextComponent} from './components/inner-items/dashboard-context/dashboard-context.component';
import {
  ManageProductsComponent
} from './components/inner-items/dashboard-context/items/manage-products/manage-products.component';
import {
  NewProductComponent
} from './components/inner-items/dashboard-context/items/manage-products/new-product/new-product.component';
import { MainConsoleHeaderComponent } from './components/main-console-header/main-console-header.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ConsoleComponent,
    DashboardContextComponent,
    ManageProductsComponent,
    NewProductComponent,
    MainConsoleHeaderComponent,

  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class ConsoleModule {
}
