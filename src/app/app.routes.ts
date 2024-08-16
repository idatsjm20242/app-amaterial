import { Routes } from '@angular/router';
import { EjemplosAmaterialComponent } from './ejemplos-amaterial/ejemplos-amaterial.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductListaComponent } from './dashboard/product/product-lista/product-lista.component';
import { CategoryListaComponent } from './dashboard/category/category-lista/category-lista.component';
import { PostListaComponent } from './dashboard/post/post-lista/post-lista.component';
import { authGuard } from './auth.guard';
import { CategoryDetalleComponent } from './dashboard/category/category-detalle/category-detalle.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            {path: "home", component: HomeComponent},
            {path: "product", component: ProductListaComponent},
            {path: "category", component: CategoryListaComponent},
            {path: "category/:id", component: CategoryDetalleComponent},
            {path: "post", component: PostListaComponent}
        ]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
