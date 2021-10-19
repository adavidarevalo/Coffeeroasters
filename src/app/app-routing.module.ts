import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      }, 
      {
        path: 'aboutUs',
        loadChildren: () => import('./pages/about-us/about-us.module').then(m=> m.AboutUsModule)
      },
      {
        path: 'createYourPlan',
        loadChildren: () => import('./pages/create-your-plan/create-your-plan.module').then(m => m.CreateYourPlanModule)
      },
      {
        path: '**',
        loadChildren: () => import('./pages/not-found/not-found.module').then(m=>m.NotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }