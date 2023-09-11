import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppStarterComponent } from './app-layouts/app-starter/app-starter.component';


// const routes: Routes = [
//   {
//     path: '',
//     component: AppStarterComponent,
//     children: [
//       {
//         path: 'users',
//         loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
//       },
//       {
//         path: 'environments',
//         loadChildren: () => import('./environments/environments.module').then(m => m.EnvironmentsModule)
//       },
//     ]
//   }
// ];



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    component: AppStarterComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'environments',
    component: AppStarterComponent,
    loadChildren: () => import('./environments/environments.module').then(m => m.EnvironmentsModule)
  },
  {
    path: 'projects',
    component: AppStarterComponent, loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'news',
    component: AppStarterComponent, loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'applications',
    component: AppStarterComponent, loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule)
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
