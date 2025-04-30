import { Routes } from "@angular/router";
import { AdminDashboardLayoutComponent } from "./layouts/admin-dashboard-layout/admin-dashboard-layout.component";
import { ProductsAdminPageComponent } from "./pages/products-admin-page/products-admin-page.component";
import { ProductAdminPageComponent } from "./pages/product-admin-page/product-admin-page.component";
import { PerfilAdminPageComponent } from "./pages/perfil-admin-page/perfil-admin-page.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProduccionComponent } from "./pages/produccion/produccion.component";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { FinanzasComponent } from "./pages/finanzas/finanzas.component";
import { ClientesComponent } from "./pages/clientes/clientes.component";
import { DepositosComponent } from "./pages/depositos/depositos.component";
import { VentasComponent } from "./pages/ventas/ventas.component";
import { DesarrolloComponent } from "./pages/desarrollo/desarrollo.component";
import { PlanificacionComponent } from "./pages/planificacion/planificacion.component";


export const adminDashboardRoutes: Routes =[
  {
    path: '',
    component: AdminDashboardLayoutComponent,
    canMatch: [],
    children: [
      {
        path: 'perfil/:id',
        component: PerfilAdminPageComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'produccion',
        component: ProduccionComponent,
      },
      {
        path: 'products',
        component: ProductsAdminPageComponent,
      },
      {
        path: 'products/:id',
        component: ProductAdminPageComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'finanzas',
        component: FinanzasComponent,
      },
      {
        path: 'clientes',
        component: ClientesComponent,
      },
      {
        path: 'depositos',
        component: DepositosComponent,
      },
      {
        path: 'ventas',
        component: VentasComponent,
      },
      {
        path: 'desarrollo',
        component: DesarrolloComponent,
      },
      {
        path: 'planificacion',
        component: PlanificacionComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export default adminDashboardRoutes;
