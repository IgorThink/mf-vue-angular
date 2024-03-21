import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from "./utils/federation.util";
import { AuthInterceptor } from './cors.interceptor';


export function initializeApp(): () => void {
  return () => {
    // loadRemoteModule({
    //   remoteEntry: "http://localhost:5001/assets/remoteEntry.js",
    //   remoteName: "profile_user",
    //   exposedModule: "./ProfileReactComponent",
    // });
  //   loadRemoteModule({
  //     remoteEntry: "http://localhost:3002/remoteEntry.js",
  //     remoteName: "settings_user",
  //     exposedModule: "./HelloWorld",
  //   });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
