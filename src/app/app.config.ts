import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"dabubble-10954","appId":"1:793363997737:web:4d3effff590b3c8a0d2838","storageBucket":"dabubble-10954.firebasestorage.app","apiKey":"AIzaSyB_MmO06emWVw8xQZ21GD2-vU4WPf_KhIM","authDomain":"dabubble-10954.firebaseapp.com","messagingSenderId":"793363997737","measurementId":"G-75WESWED2X"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
