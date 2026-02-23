import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig1 } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig1)
  .catch((err) => console.error(err));
