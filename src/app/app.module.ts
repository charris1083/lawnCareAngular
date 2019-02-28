import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ClientIndexComponent } from './components/client/client-index/client-index.component';
import { ClientsService } from './services/clients.service';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientEditComponent } from './components/client/client-edit/client-edit.component';
import { MowerIndexComponent } from './components/mower/mower-index/mower-index.component';
import { MowersService } from './services/mowers.service';
import { MowerCreateComponent } from './components/mower/mower-create/mower-create.component';
import { MowerDetailComponent } from './components/mower/mower-detail/mower-detail.component';
import { MowerEditComponent } from './components/mower/mower-edit/mower-edit.component';
import { ContractIndexComponent } from './components/contract/contract-index/contract-index.component';
import { ContractCreateComponent } from './components/contract/contract-create/contract-create.component';
import { ContractEditComponent } from './components/contract/contract-edit/contract-edit.component';
import { ContractDetailComponent } from './components/contract/contract-detail/contract-detail.component';
import { ContractsService } from './services/contracts.service';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { MowerDeleteComponent } from './components/mower/mower-delete/mower-delete.component';
const routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'clients', children: [
      { path: '', component: ClientIndexComponent },
      { path: 'create', component: ClientCreateComponent },
      { path: 'edit/:id', component: ClientEditComponent },
      { path: 'detail/:id', component: ClientDetailComponent },
      { path: 'delete/:id', component: ClientDeleteComponent }
    ]
  },
  {
   path: 'mowers',children: [
     { path: '', component: MowerIndexComponent },
     { path: 'create', component: MowerCreateComponent },
     { path: 'edit/:id', component: MowerEditComponent },
     { path: 'detail/:id', component: MowerDetailComponent },
     {path: 'delete/:id', component: MowerDeleteComponent }
   ]
  },
  {
   path: 'contracts',children: [
     { path: '', component: ContractIndexComponent },
     { path: 'create', component: ContractCreateComponent },
     { path: 'edit/:id', component: ContractEditComponent },
     { path: 'detail/:id', component: ContractDetailComponent }
   ]
  },
  { path: '**', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ClientIndexComponent,
    ClientCreateComponent,
    ClientDetailComponent,
    ClientEditComponent,
    MowerIndexComponent,
    MowerCreateComponent,
    MowerDetailComponent,
    MowerEditComponent,
    ContractIndexComponent,
    ContractCreateComponent,
    ContractEditComponent,
    ContractDetailComponent,
    ClientDeleteComponent,
    MowerDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    ClientsService,
    MowersService,
    ContractsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 