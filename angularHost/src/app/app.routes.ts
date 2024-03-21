import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

const routes: Routes = [
  {
    path: 'vue-page',
    loadComponent: () => import('./vue-page/vue-page.component').then(m =>{
      return m.VuePageComponent
    }),
    pathMatch: 'full',
  },
  {
    path: 'vue-page-composition',
    loadComponent: () => import('./vue-page/vue-page.component').then(m =>{
      return m.VuePageComponent
    }),
    data: {
      option: 'composition'
    },
    pathMatch: 'full',
  } 
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }