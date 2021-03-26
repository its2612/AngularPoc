import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import {LoginComponent} from '../app/login/login.component';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {Dashboard1Component} from '../app/admin/dashboard1/dashboard1.component'
const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'login',component:LoginComponent},
{path:'mainDashboard',component:MainDashboardComponent},
{path:'blog',component:BlogComponent},
{path:'about',component:AboutusComponent},
{path:'contact',component:ContactComponent},
{path:'dashboard1',component:Dashboard1Component},
{ path: '',   redirectTo: 'mainDashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
