import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

// import HelloWorld from "mfe1"

// export function initializeApp(): () => void {
//   return () => {
//     loadRemoteModule({
//       remoteEntry: 'http://localhost:5001/assets/remoteEntry.js',
//       remoteName: 'remote_app',
//       exposedModule: './Vue',
//     });
//     // loadRemoteModule({
//     //   remoteEntry: "http://localhost:3002/remoteEntry.js",
//     //   remoteName: "settings_user",
//     //   exposedModule: "./Settings",
//     // });
//   };
// }

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeApp,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  ngOnInit() {
    console.log('app', AppComponent)
  }
}
