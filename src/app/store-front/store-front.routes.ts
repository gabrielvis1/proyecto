import { Routes } from '@angular/router';
import { StoreFrontLayoutComponent } from './layouts/store-front-layout/store-front-layout.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'productos',
        component: ProductComponent,
      },
      {
        path: 'recetas',
        component: RecetasComponent,
      },
      {
        path: 'novedades',
        component: NovedadesComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'product/:Id',
        component: ProductPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRoutes;
