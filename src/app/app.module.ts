/*Angular Components*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/*Components*/
import { AppComponent } from './app.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';


//import { AuthService } from './services/auth/auth.service';


/*Firebase imports*/
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


//import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { ForgotPwdComponent } from './components/forgot-pwd/forgot-pwd.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { CitasComponent } from './pages/citas/citas.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';

import { PortadaComponent } from './pages/portada/portada.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
//import { FirestoreService } from './services/firestore/firestore.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    //AngularFireModule.initializeApp(environment.firebase),

  ],
  declarations: [ 
     AppComponent,
     MainComponent,
     HistoriaComponent,
     HomeComponent,
     ResultadosComponent,
     ImagenesComponent,
     LoginComponent,
     SignupComponent,
     OrdenesComponent,
     ForgotPwdComponent,
     CertificadosComponent,
     RecetasComponent,
     CitasComponent,
     PrincipalComponent,
     EspecialidadesComponent,
     ExamenesComponent,
     PreguntasComponent,
     PortadaComponent,
     ConsultasComponent
    ],
    providers: [

      { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

