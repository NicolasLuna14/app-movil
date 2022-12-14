import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-d',
    loadChildren: () => import('./login-d/login-d.module').then( m => m.LoginDPageModule)
  },
  {
    path: 'options-d',
    loadChildren: () => import('./options-d/options-d.module').then( m => m.OptionsDPageModule)
  },
  {
    path: 'log-alumno',
    loadChildren: () => import('./log-alumno/log-alumno.module').then( m => m.LogAlumnoPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'options-a',
    loadChildren: () => import('./options-a/options-a.module').then( m => m.OptionsAPageModule)
  },
  {
    path: 'qr/:id',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'camara-a',
    loadChildren: () => import('./camara-a/camara-a.module').then( m => m.CamaraAPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'posts/:id',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
