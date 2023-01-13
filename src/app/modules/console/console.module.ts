import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConsoleRoutingModule} from './console-routing.module';
import {ConsoleComponent} from './console.component';
import {DashboardContextComponent} from './components/inner-items/dashboard-context/dashboard-context.component';
import {
  ManageProductsComponent
} from './components/inner-items/dashboard-context/items/manage-products/manage-products.component';
import { NewProductComponent } from './components/inner-items/dashboard-context/items/manage-products/new-product/new-product.component';
import { MainConsoleHeaderComponent } from './component-other/main-console-header/main-console-header.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    DashboardContextComponent,
    ManageProductsComponent,
    NewProductComponent,
    MainConsoleHeaderComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule {
}
