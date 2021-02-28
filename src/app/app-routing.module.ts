import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'signal',
    loadChildren: () => import('./signal/signal.module').then(m => m.SignalModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false, useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
