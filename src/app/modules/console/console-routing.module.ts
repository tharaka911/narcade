import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';
import {DashboardContextComponent} from "./components/inner-items/dashboard-context/dashboard-context.component";

import {
  ManageProductsComponent
} from "./components/inner-items/dashboard-context/items/manage-products/manage-products.component";
import {
  NewProductComponent
} from "./components/inner-items/dashboard-context/items/manage-products/new-product/new-product.component";

const routes: Routes = [{ path: '', component: ConsoleComponent,children:[
  {path:'', redirectTo:'/console/playground/product/new',pathMatch:'full'},
    {path:'playground',component:DashboardContextComponent,children:[
      {path:'product',component:ManageProductsComponent,children:[
        {path:'new',component:NewProductComponent}
        ]},

      ]}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
