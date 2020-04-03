import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ObjectViewComponent } from './object-view/object-view.component';


const routes: Routes = [
  { path: '',         redirectTo:'./home/home.component', pathMatch: 'full' },
  { path: 'home',     component: HomeComponent,     pathMatch: 'full' },
  { path: 'ObjectView',     component: ObjectViewComponent,     pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
