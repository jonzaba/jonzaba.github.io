import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),importProvidersFrom(BrowserModule, HttpClientModule)
  ]
}).catch(err => console.error(err));
