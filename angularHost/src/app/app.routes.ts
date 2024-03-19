import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule,  } from '@angular/router';


const routes: Routes = [
  {
    path: '',
// @ts-ignore      
    loadChildren: () => import('remote_app/HelloWorld').then(m => m.HelloWorld)
  } ,
  // {
  //   path: 'vue',
  //   component: WebComponentWrapper,
  //       data: {
  //         type: 'module',
  //         remoteEntry: 'https://localhost:5001/assets/remoteEntry.js',
  //         exposedModule: './web-components',
  //         elementName: 'angular1-element'
  //       } as WebComponentWrapperOptions
  // } 
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }