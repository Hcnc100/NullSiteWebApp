import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsModule} from "./projects/projects.module";
import {HomeModule} from "./home/home.module";
import {NavigationModule} from "./navigation/navigation.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SkillModule} from "./skill/skill.module";
import {ContactModule} from "./contact/contact.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { EllipsisModule } from 'ngx-ellipsis';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {ToastrModule} from "ngx-toastr";

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HomeModule,
    NavigationModule,
    SkillModule,
    FontAwesomeModule,
    ContactModule,
    BrowserAnimationsModule,
    SharedModule,
    EllipsisModule,
    ToastrModule.forRoot(),
    [LottieModule.forRoot({ player: playerFactory })],
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
