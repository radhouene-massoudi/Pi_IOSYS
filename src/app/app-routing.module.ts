import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproduitsComponent } from './addproduits/addproduits.component';

const routes: Routes = [
  {
    path:'list',component:ProductsComponent
  },
  {
    path:'add',component:AddproduitsComponent
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
