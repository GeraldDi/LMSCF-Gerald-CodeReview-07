import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [{

        path:"",component: HomeComponent

},{

        path:"blog",component: BlogComponent

},{

        path:"cart",component: CartComponent

},

{

        path: "travels",component: TravelsComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
