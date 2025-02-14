import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AngularSvgIconModule.forRoot()), 
    provideHttpClient() // Required for HTTP requests
  ],
});
