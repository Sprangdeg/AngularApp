import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StryktipsetComponent } from './stryktipset'

const appRoutes: Routes = [
  { path: 'stryktipset', component: StryktipsetComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
