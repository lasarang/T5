import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MainComponent } from './components/main/main.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { LoginComponent } from './components/login/login.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPwdComponent } from './components/forgot-pwd/forgot-pwd.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/compat/auth-guard';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CitasComponent } from './pages/citas/citas.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['users/home']);


const routes: Routes = [
      
      {
        path: 'login', 
        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems },
        component: LoginComponent, 
      },

      {
        path: 'signup', 
        component: SignupComponent, 
      },

      {
        path: 'forgotpwd', 
        component: ForgotPwdComponent, 
      },

      {
        path: 'users',
        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
        component: MainComponent, // this is the component with the <router-outlet> in the template
        children: [
          {
            path: 'home', 
            component: HomeComponent, 
          },
          {
            path: 'citas', 
            component: CitasComponent, 
          },
    
          {
            path: 'historia',
            component: HistoriaComponent,
          },
          {
            path: 'resultados',
            component: ResultadosComponent,
          },
          {
            path: 'imagenes',
            component: ImagenesComponent,
          },
          {
            path: 'ordenes',
            component: OrdenesComponent,
          },
          {
            path: 'recetas',
            component: RecetasComponent,
          },
          {
            path: 'certificados', 
            component: CertificadosComponent, 
          },
          {
            path: 'contacto', 
            component: ContactoComponent, 
          },
    
        ],
      },
      // All your other routes should come first    

      {
        path: '**', 
        redirectTo: 'login', 
        pathMatch: 'full'
      },
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }