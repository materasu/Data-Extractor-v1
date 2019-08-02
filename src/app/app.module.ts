import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DialogModule } from 'primeng/dialog';
import { LightboxModule } from 'primeng/lightbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
// import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// import { FileDropModule } from 'ngx-file-drop';

var routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    TableModule,
    // AngularFireModule.initializeApp(environment.firebase),
    PdfViewerModule,
    DialogModule,
    // FileDropModule,
    NgbModule,
    LightboxModule,
    ButtonModule,
    TooltipModule,
    CheckboxModule,
    CardModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
