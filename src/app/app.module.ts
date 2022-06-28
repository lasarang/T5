import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HistoriaComponent } from "./pages/historia/historia.component";
import { HomeComponent } from "./pages/home/home.component";
import { MainComponent } from "./components/main/main.component";
import { ResultadosComponent } from "./pages/resultados/resultados.component";
import { ImagenesComponent } from "./pages/imagenes/imagenes.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { OrdenesComponent } from "./pages/ordenes/ordenes.component";

import { FIREBASE_OPTIONS } from "@angular/fire/compat";

import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";

import { ForgotPwdComponent } from "./components/forgot-pwd/forgot-pwd.component";
import { CertificadosComponent } from "./pages/certificados/certificados.component";
import { RecetasComponent } from "./pages/recetas/recetas.component";
import { CitasComponent } from "./pages/citas/citas.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { EspecialidadesComponent } from "./pages/especialidades/especialidades.component";
import { ExamenesComponent } from "./pages/examenes/examenes.component";
import { PreguntasComponent } from "./pages/preguntas/preguntas.component";

import { PortadaComponent } from "./pages/portada/portada.component";
import { ConsultasComponent } from "./pages/consultas/consultas.component";
import { LabResultsComponent } from "./pages/lab-results/lab-results.component";
import { SafePipe } from "./pipes/safe.pipe";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    CertificadosComponent,
    CitasComponent,
    ConsultasComponent,
    EspecialidadesComponent,
    ExamenesComponent,
    ForgotPwdComponent,
    HistoriaComponent,
    HomeComponent,
    ImagenesComponent,
    LabResultsComponent,
    LoginComponent,
    MainComponent,
    OrdenesComponent,
    PortadaComponent,
    PreguntasComponent,
    PrincipalComponent,
    RecetasComponent,
    ResultadosComponent,
    SafePipe,
    SignupComponent,
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
