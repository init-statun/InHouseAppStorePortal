import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from "@angular/material/dialog";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormConfigService } from './form-config-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppStarterComponent } from './app-layouts/app-starter/app-starter.component';
import { DynamicFormCreatorComponent } from './app-layouts/dynamic-form-creator/dynamic-form-creator.component';
import { AppFooterComponent } from './app-layouts/app-footer/app-footer.component';
import { AppHeaderComponent } from './app-layouts/app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConfirmationDialogComponent } from './app-layouts/confirmation-dialog/confirmation-dialog.component';
import { PaginationComponent } from './app-layouts/pagination/pagination.component';
import { LoginComponent } from './app-layouts/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppStarterComponent,
    DynamicFormCreatorComponent,
    AppFooterComponent,
    AppHeaderComponent,
    ConfirmationDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [FormConfigService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
