import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light';

 // Run function to initiate component
 defineCustomElements();

 // add theme
 addTheme(scania)

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
