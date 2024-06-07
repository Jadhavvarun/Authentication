import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBxX_gmXtXPE-Uw7P__xQugolagz8G2BtQ",
  authDomain: "angular-firebase-auth-f4ed0.firebaseapp.com",
  projectId: "angular-firebase-auth-f4ed0",
  storageBucket: "angular-firebase-auth-f4ed0.appspot.com",
  messagingSenderId: "843020352072",
  appId: "1:843020352072:web:e1cd282deb72e5669af67d"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ]
};